import { db } from '/server/lib/collections/server/db'
import { containsBetween } from '/imports/ui/helpers-array'

// if we use observe instead of observeChanges, we will save messages sent to client, but it will put a bit more stress on server.

export const observePublish = ({
  _S,
  _ts,
  grp_ids = [],
  g_On = true,
  pub,
  dbName,
  params = {},
  customParamsOn = false,
  fields = {},
  customFields = false,
  allFields = true,
}) => {
  // function consoleMe(...Options) {
  //   if (
  //     dbName === 'Session'
  //   ) {
  //     console.log(...Options)
  //   }
  // }

  const prepFields = allFields
    ? {}
    : customFields
    ? fields
    : {
        g_On: 1,
        g_ids: 1,
        del: 1,
        pub: 1,
        hid: 1,
        _ts: 1,
        _S: 1,
        _L: 1,
        ...fields,
      }

  const query = customParamsOn ? params : { ...params, _S }

  if (_ts) {
    query._ts = { $gt: _ts }
  } else {
    query.del = false
    query.pub = true
    query.hid = { $ne: true }
    if (g_On) {
      if (grp_ids.length) {
        query.$or = [
          { g_On: { $ne: true } },
          {
            g_On: true,
            g_ids: { $in: grp_ids },
          },
        ]
      } else {
        query.g_On = { $ne: true }
      }
    }
  }
  // consoleMe('observePublish query', query)
  // consoleMe('observePublish prepFields', prepFields)
  return db[dbName]
    .find(query, {
      sort: { _ts: 1 },
      fields: prepFields,
    })
    .observe({
      added: ({ _id, ...itemFields }) => {
        // console.log('_S', _S)
        // consoleMe('Added', dbName, itemFields)
        if (
          itemFields.del ||
          itemFields.hid ||
          !itemFields.pub
        ) {
          pub.added(dbName, _id, {
            _S,
            _ts: itemFields._ts,
            removed: true,
          })
          // Meteor.setTimeout(() => {
          //   pub.removed(dbName, _id)
          // }, 50)
        } else {
          // if have access on dif logic
          if (itemFields.g_On) {
            if (
              containsBetween(itemFields.g_ids, grp_ids)
            ) {
              pub.added(dbName, _id, {
                ...itemFields,
                removed: false,
              })
            } else {
              pub.added(dbName, _id, {
                _S,
                removed: true,
                _ts: itemFields._ts,
              })
              // Meteor.setTimeout(() => {
              //   pub.removed(dbName, _id)
              // }, 50)
            }
          } else {
            pub.added(dbName, _id, {
              ...itemFields,
              removed: false,
            })
          }
        }
      },
      changed: ({ _id, ...itemFields }, oldDoc) => {
        // consoleMe('Changed', dbName, itemFields)
        // consoleMe(
        //   'CHANGED _START',
        //   pub._documents.get(dbName),
        // )
        // consoleMe(
        //   'CHANGED _END',
        //   pub._documents.get(dbName).has(_id),
        // )
        // consoleMe('Changed', oldDoc, itemFields)

        //  in deimos we have function that serves both cms and app cia same message contruct modify interface, check pubsubsend lambda
        let action = ''
        // standard action
        if (
          !itemFields.del &&
          !itemFields.hid &&
          itemFields.pub
        ) {
          if (pub._documents.get(dbName).has(_id)) {
            action = 'changed'
          } else {
            action = 'added'
          }
        } else {
          action = 'removed'
        }
        // console.log('action', action)
        if (itemFields.g_On) {
          switch (action) {
            case 'added':
              if (
                !containsBetween(itemFields.g_ids, grp_ids)
              ) {
                action = ''
              }
              break
            case 'changed':
              if (
                containsBetween(itemFields.g_ids, grp_ids)
              ) {
                if (
                  (!containsBetween(
                    oldDoc.g_ids,
                    grp_ids,
                  ) &&
                    oldDoc.g_On)
                ) {
                  action = 'added'
                }
              } else {
                if (!oldDoc.g_On) {
                  action = 'removed'
                }
              }
              // else {
              //   action = 'removed'
              //   if (
              //     (containsBetween(oldDoc.g_ids, grp_ids) &&
              //       oldDoc.g_On) ||
              //     !oldDoc.g_On
              //   ) {
              //     action = 'removed'
              //   }
              // }

              break
            case 'removed':
              if (
                !containsBetween(oldDoc.g_ids, grp_ids) &&
                oldDoc.g_On
              ) {
                action = ''
              }
              break
          }
        } else if (oldDoc.g_On) {
          if (
            !containsBetween(oldDoc.g_ids, grp_ids) &&
            action === 'changed' &&
            oldDoc._ts > _ts
          ) {
            action = 'added'
          }
        }
        // consoleMe('ACTION', action)
        if (
          action === 'changed' &&
          !pub._documents.get(dbName).has(_id)
        ) {
          action = 'added'
        }
        // consoleMe('action', action)
        switch (action) {
          case 'added':
            pub.added(dbName, _id, {
              ...itemFields,
              removed: false,
            })
            break
          case 'changed':
            pub.changed(dbName, _id, {
              ...itemFields,
              removed: false,
            })
            break
          case 'removed':
            if (pub._documents.get(dbName).has(_id)) {
              pub.changed(dbName, _id, {
                _S,
                removed: true,
                _ts: itemFields._ts,
              })
            } else {
              pub.added(dbName, _id, {
                _S,
                removed: true,
                _ts: itemFields._ts,
              })
            }
            // Meteor.setTimeout(() => {
            //   pub.removed(dbName, _id)
            // }, 50)
            break

          // default:
          //   pub.changed(dbName, _id, {
          //     _S,
          //     pub: false,
          //     del: true,
          //     hid: itemFields.hid,
          //     _ts: itemFields._ts,
          //   })
          //   break
        }
        //   if (itemFields.del || itemFields.hid || !itemFields.pub) {
        //     if (!oldDoc.del && !oldDoc.hid && oldDoc.pub) {
        //       pub.removed(dbName, _id, {
        //         _S,
        //         _ts: itemFields._ts,
        //         del: true,
        //       })
        //     }
        //   } else {
        //     pub.changed(dbName, _id, itemFields)
        //   }
      },
      removed: ({ _id }) => {
        if (pub._documents.get(dbName).has(_id)) {
          pub.changed(dbName, _id, {
            _S,
            removed: true,
            _ts: Date.now() - 1000,
          })
        } else {
          pub.added(dbName, _id, {
            _S,
            removed: true,
            _ts: Date.now() - 1000,
          })
        }
      },
    })
}

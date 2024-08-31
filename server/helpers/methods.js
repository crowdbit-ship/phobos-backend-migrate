// import { Meteor } from 'meteor/meteor'
import { containsBetween } from '/imports/ui/helpers-array'
import { db } from '/server/lib/collections/server/db'

export const getListforDb = function ({
  _S,
  _ts,
  allFields = true,
  customFields = false,
  customParamsOn = false,
  dbName,
  fields = {},
  filterFunc,
  filterFuncOn = false,
  filterFuncParams,
  g_On = true,
  grp_ids = [],
  params = {},
}) {
  // function consoleMe(...Options) {
  //   if (dbName === 'Feed') {
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

  const query =
    filterFuncOn && _ts
      ? filterFuncParams
      : customParamsOn
      ? params
      : { ...params, _S }

  if (_ts) {
    if (g_On) {
      if (grp_ids.length) {
        query.$or = [
          { g_On: { $ne: true }, _ts: { $gt: _ts } },
          {
            g_On: true,
          },
        ]
      } else {
        query._ts = { $gt: _ts }
      }
    } else {
      query._ts = { $gt: _ts }
    }
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
  // consoleMe('getListforDb', dbName, query, prepFields)
  const result = db[dbName]
    .find(query, {
      fields: prepFields,
      sort: { _ts: 1 },
    })
    .fetch()
  if (_ts) {
    return result.map((item) => {
      if (
        item.g_On &&
        !containsBetween(grp_ids, item.g_ids)
      ) {
        return {
          _id: item._id,
          _S: item._S,
          g_ids: item.g_ids,
          _ts: item._ts,
          removed: true,
        }
      }
      if (filterFuncOn) {
        // consoleMe('filterFunc', filterFunc(item))
        if (filterFunc(item)) {
          return {
            _id: item._id,
            _S: item._S,
            removed: true,
            // del: item.del,
            _ts: item._ts,
          }
        }
      }
      if (!item.pub || item.del || item.hid) {
        return {
          _id: item._id,
          _S: item._S,
          removed: true,
          // del: item.del,
          _ts: item._ts,
        }
      }
      return item
    })
  }
  return result
}

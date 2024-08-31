import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { observePublish } from '/server/helpers/publish'
import { db } from '/server/lib/collections/server/db'
import { APP_USER_FIELDS_ALLOWED } from '/server/service/app/app.constant'

Meteor.publish('App-list', function ({  _ts = 0 }) {
  check(_ts, Number)

  const handle = observePublish({
    _ts,
    g_On:false,
    pub: this,
    dbName: 'App',
    customParamsOn: true,
    params:{ del: false, pub: true},
    fields:APP_USER_FIELDS_ALLOWED,
    allFields: false,
    customFields: true,
  })
  this.ready()
  this.onStop(() => handle.stop())
})
// MULTIAPP need revamp
// used in register, form, screencast, broadcast and videocast
Meteor.publish('App-list-temp', function ({ _ts = 0 }) {
  // console.log('🎀', 'App-list')
  const query = {
    _ts: { $gt: _ts },
    del: false,
    pub: true,
  }
  const subQuery = {
    sort: { _ts: 1 },
  }
  // if (this.userId) {
  subQuery.fields = APP_USER_FIELDS_ALLOWED
  // } else {
  // }
  // subQuery.fields = settingsFieldsPublic

  return [
    db.App.find(query, subQuery),
    db.Settings.find(
      {
        _on: true,
        _L: 'o',
        _is: 'setting',
      },
      {
        fields: {
          _is: 1,
          _L: 1,
          _on: 1,
          _S: 1,
          legalNotice: 1,
          showNotice: 1,
          showAgree: 1,
          showOnboard: 1,
          agreeV: 1,
          policyUrl: 1,
          suppEmail: 1,
          portal: 1,
          pub: 1,
          del: 1,
        },
      },
    ),
  ]
})

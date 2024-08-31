import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { db } from '/server/lib/collections/server/db'
import { getListforDb } from '/server/helpers/methods'
import { APP_USER_FIELDS_ALLOWED } from '/server/service/app/app.constant'

Meteor.methods({
  async 'app/list'({ _ts = 0 }) {
    check(_ts, Number)
    return getListforDb({
      g_On: false,
      dbName: 'App',
      params: { del: false, pub: true },
      customParamsOn: true,
      allFields: false,
      fields: APP_USER_FIELDS_ALLOWED,
    })
  },
})

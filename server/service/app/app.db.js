import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { db } from '/server/lib/collections/server/db'
// import {
//   EDITOR_OUTER,
//   CLASSIFIERS_PORTAL,
//   USER_GROUPS_APP_DEFAULT,
// } from '/imports/ui/service-init'
// import {
//   addDefaultFields,
//   updateTimeStamp,
// } from '/server/helpers/db'

export const App = new Mongo.Collection('App')

App.allow({
  insert() {
    return false
  },
  update() {
    return false
  },
  remove() {
    return false
  },
})

App.deny({
  insert() {
    return true
  },
  update() {
    return true
  },
  remove() {
    return true
  },
})

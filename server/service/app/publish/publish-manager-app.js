import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { db } from '/server/lib/collections/server/db'
const settingsFieldsPublic = {
  _id: 1,
  title: 1,
  image: 1,
}
// MULTIAPP need revamp
Meteor.publish('App-manager', function () {
  // console.log('🧬', 'App-manager')
  const query = {
    del: false,
    pub: true,
  }
  const subQuery = {
    sort: { _ts: 1 },
  }
  // if (!isModeratorById(this.userId)) {
  //   subQuery.fields = settingsFieldsPublic
  // }

  return db.App.find(query, subQuery)
})

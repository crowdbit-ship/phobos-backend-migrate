import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { db } from '/server/lib/collections/server/db'
// MULTIAPP need revamp
Meteor.publish('App-temp-cms', function () {
  // console.log('🧬', 'App-cms')
  const query = {
    del: false,
    pub: true,
  }
  const subQuery = {
    fields: { title: 1, img: 1, support: 1, portal: 1 },
    sort: { _ts: 1 },
  }
  return db.App.find(query, subQuery)
})
// MULTIAPP need revamp
Meteor.publish('App-cms', function () {
  // console.log('🧬', 'App-cms')
  if (this.userId) {
    const query = {
      del: false,
    }
    const subQuery = {
      sort: { _ts: 1 },
    }

    return db.App.find(query, subQuery)
  }
  this.ready()
})

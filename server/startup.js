import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { db } from '/server/lib/collections/server/db'

export let DEV_ENV = false

Meteor.startup(() => {
  console.log('🪷', 'Started')
})

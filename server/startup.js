import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { db } from '/server/lib/collections/server/db'
import { checkCreateApp } from '/server/service/app/app.helper'

export let DEV_ENV = false

function setupProdEnviroment() {
  const firstRun = checkCreateApp()
  if (firstRun) {
    console.log('🥭','Doing firstRun')
    console.log(db.App.find().fetch())
  }
}

Meteor.startup(() => {
  console.log('🪷', 'Started')
  setupProdEnviroment()
})

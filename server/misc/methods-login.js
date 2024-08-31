import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/random'
import { check } from 'meteor/check'
import { db } from '/server/lib/collections/server/db'

Meteor.methods({
  async 'login:enter-email'({ userEmail }) {
    this.unblock()
    throw new Meteor.Error(
      555,
      'App update required. You cannot use this version. Please update to continue.',
    )
  },
  async 'login:enter-code'({ code, userEmail }) {
    check(userEmail, String)
    check(code, String)
    throw new Meteor.Error(
      555,
      'App update required. You cannot use this version. Please update to continue.',
    )
  },
  async 'login:check-email'({ userEmail }) {
    throw new Meteor.Error(
      555,
      'App update required. You cannot use this version. Please update to continue.',
    )
  },
  async 'login:update-password'() {
    this.unblock()
    throw new Meteor.Error(
      555,
      'App update required. You cannot use this version. Please update to continue.',
    )
  },
  async 'login:logout'() {
    this.unblock()
    throw new Meteor.Error(
      555,
      'App update required. You cannot use this version. Please update to continue.',
    )
  },
})

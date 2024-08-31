import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { db } from '/server/lib/collections/server/db'

export function checkCreateApp(params = {}) {
  if (db.App.find({}).count() === 0) {
    const app = {
      _id: 'F5m4zJSBNg2K62KmS',
      title: 'ICC DRS',
      img: `data:image/png;base64,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`,
      _pub: true,
      api: {
        gMap: 'AIzaSyC-1-DDpWiQXOYsqIJRpiuMCZbCsVbxVZM',
      },
      login: {},
      onBoard: {},
      user: {
        required: {},
        schema: {},
      },
      i18n: {
        default: 'en',
      },
      design: {},
      loginTemplate: 'eubGiEAzL8tq24WRc',
      push: {
        enabled: true,
        arn: {
          ios: '',
          android: '',
        },
      },
      support: {
        main: 'dataprotection@iccwbo.org',
        remove: 'dataprotection@iccwbo.org',
      },
      portal: {
        viewer: {
          v: 980,
        },
        speaker: {
          v: 0,
        },
        sponsor: {
          v: 0,
        },
        form: {
          v: 174,
        },
        team: {
          v: 0,
        },
        pro: {
          v: 0,
        },
        cms: {
          v: 1174,
        },
        backstage: {
          v: 104,
        },
        ios: {
          v: 1000,
        },
        android: {
          v: 1000,
        },
        manager: {
          v: 238,
        },
        screen: {
          v: 35,
        },
      },
      _ts: 1710925183688,
      _cAt: 1620569312395,
      _del: false,
      reviewEmail: 'review@crowdbit.tech',
      reviewOn: '555333444',
      appStore:
        'https://apps.apple.com/be/app/icc-drs/id1047307070',
      playStore:
        'https://play.google.com/store/apps/details?id=io.eventspark.iccevents&hl=en_GB%20',
      del: false,
      pub: true,
      _agreeVAt: 1710396367024,
      agreeV: 2,
      legalNotice:
        '<div>Your personal data is collected by the ICC, joint data controllers, for the purpose of sending you promotional emails on ICC product and services. If you refuse to complete the form, you could not install the application but you can access to events on <a href="https://2go.iccwbo.org/" target="_blank">https://2go.iccwbo.org</a> or ICC materials and tools on <a href="https://iccwbo.org/dispute-resolution-services" target="_blank">https://iccwbo.org/dispute-resolution-services</a>. You will be able to opt out at any time. You have the right to access, rectify, erase, the right to portability of your personal data, the right to restrict and object the processing, by sending an email to <a href="mailto:dataprotection@iccwbo.org" target="_blank">dataprotection@iccwbo.org</a> or writing to the International Chamber of Commerce, ICC DPO, 33-43 avenue du Président Wilson 75116 Paris, France. For further information about this processing, please visit this <a href="https://crowdbitpublic.s3-eu-west-1.amazonaws.com/ICC+DOCS/DRS_Application_Privacy_Policy.pdf" target="_blank"><b>page</b></a></div>',
      policyUrl:
        'https://icc-crowdbit-cloud.s3.eu-west-1.amazonaws.com/drs-app/a73hfai3fbajfbllJSafe9o3jf39qfq3fq/DRS+application_privacy+policy_rev18-08-2021.pdf',
      showAgree: true,
      showOnboard: true,
      _S: 'oro_events_app',
    }
    return db.App.insert(app)
  }
  return false
}
// MULTIAPP need revamp
export function getAppId() {
  return db.App.findOne(
    { pub: true },
    { fields: { _id: 1 } },
  )._id
}

export function setLoginTemplate({ _id, loginTemplate }) {
  return db.App.update({ _id }, { $set: { loginTemplate } })
}
// MULTIAPP need revamp
export function getLoginTemplate() {
  return db.App.findOne(
    { pub: true },
    { fields: { loginTemplate: 1 } },
  ).loginTemplate
}

export function getAppOrEventTitle({ _S, _L }) {
  check(_S, String)
  check(_L, String)
  if (_L === 'o') {
    return (
      db.App.findOne({ _id: _S }, { fields: { title: 1 } })
        .title || ''
    )
  }
  return (
    db.Event.findOne({ _id: _S }, { fields: { title: 1 } })
      .title || ''
  )
}

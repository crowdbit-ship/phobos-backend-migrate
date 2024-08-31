import { Meteor } from 'meteor/meteor'
import { db } from '/server/lib/collections/server/db'
import { checkCreateApp } from '/server/service/app/app.helper'

export function setupProdEnviroment() {
  const firstRun = checkCreateApp()
  if (firstRun) {
    // createBroadcastUser()
    // createVideoCastUser()
    // addDefaultUsers(firstRun, 'o')
    // const loginTemplate = createEmailTemplate({
    //   _S: firstRun,
    //   _L: 'o',
    //   template: 'login',
    // })
    // setLoginTemplate({ _id: firstRun, loginTemplate })
  }
}

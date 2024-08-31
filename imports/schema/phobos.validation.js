// pnp:/Users/po/Projects/orobotics/infrastructure/base/src/service/user/schema/user.validation.ts
const USER = {
  _S: 'str',
  pub: 'bool',
  pos: 'str',
  marsId: 'str',
  hid: 'bool',
  grp_ids: 'str',
  del: 'bool',
  comp: 'str',
  _ts: 'num',
  _is: 'str',
  _id: 'str',
  email: 'str',
  mName: 'str',
  lName: 'str',
  fName: 'str',
}

// pnp:/Users/po/Projects/orobotics/infrastructure/base/src/service/event/schema/event.validation.ts
const EVENT = {
  _S: 'str',
  title: 'str',
  _id: 'str',
  _ts: 'num',
  _is: 'str',
  g_On: 'bool',
  g_ids: 'strArr',
  del: 'bool',
  pub: 'bool',
  endAt: 'timeObj',
  about: 'str',
  startAt: 'timeObj',
  hid: 'bool',
  is_ts: 'str',
}

// pnp:/Users/po/Projects/orobotics/infrastructure/base/src/service/poll/schema/poll.validation.ts
const POLL = {
  _id: 'str',
  _ts: 'num',
  _S: 'str',
  votes: '',
  answers: 'arrAnswerObj',
  title: 'str',
  _is: 'str',
  del: 'bool',
  pub: 'bool',
  startAt: 'timeObj',
  g_ids: 'strArr',
  g_On: 'bool',
}

// pnp:/Users/po/Projects/orobotics/infrastructure/base/platform/phobos/schema/phobos.validation.ts
const VALIDATION = {
  user: USER,
  event: EVENT,
  poll: POLL,
}
export { VALIDATION }

// src/services/meeting/meeting.constant.ts
const MEETING_STATUS_SCHEMA = {
  _yes: {
    title: 'Attending',
    color: 'var(--action)',
  },
  _maybe: {
    title: 'Maybe',
    color: 'var(--neutral)',
  },
  _no: {
    title: 'Not Attending',
    color: 'var(--critical)',
  },
  _invited: {
    title: 'Invited',
    color: 'var(--warning)',
  },
}
export { MEETING_STATUS_SCHEMA }

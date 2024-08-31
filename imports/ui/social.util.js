// src/services/feed/feed.constant.ts
const FEED_TYPE_OPTIONS = [
  {
    label: 'Post',
    value: 'post',
  },
  {
    label: 'Photo Booth',
    value: 'booth',
  },
  {
    label: 'Social',
    value: 'social',
  },
]
const FEED_SUBTYPE_SCHEMA = {
  F_A: {
    title: 'Announcement',
  },
  F_P: {
    title: 'Poll',
  },
  F_D: {
    title: 'Discussion',
  },
  F_Q: {
    title: 'Question',
  },
  F_AD: {
    title: 'Ad',
  },
  F_S: {
    title: 'Survey',
  },
}
const FEED_SUBTYPES = Object.keys(FEED_SUBTYPE_SCHEMA)
const FEED_TYPES = FEED_TYPE_OPTIONS.map(
  ({ value }) => value,
)
export { FEED_SUBTYPES, FEED_SUBTYPE_SCHEMA, FEED_TYPES }

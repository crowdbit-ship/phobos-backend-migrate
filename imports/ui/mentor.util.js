// src/services/circle/circle.constant.ts
const REGION_GROUPS = [
  { locked: true, title: 'Latin America', _id: 'region1' },
  { locked: true, title: 'North America', _id: 'region2' },
  { locked: true, title: 'North Asia', _id: 'region3' },
  { locked: true, title: 'South Asia', _id: 'region4' },
  { locked: true, title: 'Africa', _id: 'region5' },
  { locked: true, title: 'Middle East', _id: 'region6' },
  { locked: true, title: 'Europe', _id: 'region7' },
]
const REGION_GROUPS_ARRAY = [
  'region1',
  'region2',
  'region3',
  'region4',
  'region5',
  'region6',
  'region7',
]
const REGION_GROUPS_OPTIONS = REGION_GROUPS.map((item) => ({
  label: item.title,
  value: item._id,
}))
export { REGION_GROUPS, REGION_GROUPS_ARRAY }

// src/utils/helper/_x_/time/displayTimestamp.js
const timeOptions = {
  minute: '2-digit',
  hour: '2-digit',
  hourCycle: 'h23',
}
const dayOptions = {
  day: 'numeric',
}
const monthOptions = {
  month: 'short',
}
const yearOptions = {
  year: 'numeric',
}
function displayTimestamp({ timestamp, locale = 'en-UK' }) {
  const date = new Date(timestamp)
  const time = date.toLocaleString(locale, timeOptions)
  const day = date.toLocaleString(locale, dayOptions)
  const month = date.toLocaleString(locale, monthOptions)
  const year = date.toLocaleString(locale, yearOptions)
  const formatedDate = `${day} ${month} ${year} - ${time}`
  return formatedDate
}
export { displayTimestamp }

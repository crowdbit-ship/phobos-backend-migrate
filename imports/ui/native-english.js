// src/utils/constant/_x_/native-english.js
const englishCountries = [
  'AG',
  'AU',
  'BS',
  'BB',
  'BZ',
  'CA',
  'DM',
  'GD',
  'GY',
  'IE',
  'JM',
  'MT',
  'NZ',
  'KN',
  'LC',
  'VC',
  'TT',
  'GB',
  'US',
]
function isNativeEnglish(code) {
  return englishCountries.includes(code)
}
export { isNativeEnglish }

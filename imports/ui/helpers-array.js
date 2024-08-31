// src/utils/helper/_x_/array/containsBetween.js
const containsBetween = function (a = [], b = []) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    console.log(
      '\u274C',
      'Not an array compared in containsBetween',
    )
    return false
  }
  const setB = new Set(b)
  for (const item of a) {
    if (setB.has(item)) {
      return true
    }
  }
  return false
}

// src/utils/helper/_x_/array/unique.js
function unique(array) {
  return Array.from(new Set(array))
}

// src/utils/helper/_x_/array/sortBy.js
const ASCENDING = false
const DESCENDING = true
function sortBy(key, reverse) {
  const moveSmaller = reverse ? 1 : -1
  const moveLarger = reverse ? -1 : 1
  return (a, b) => {
    if (a[key] < b[key]) {
      return moveSmaller
    }
    if (a[key] > b[key]) {
      return moveLarger
    }
    return 0
  }
}
function sortByTwoDesc(primaryKey, secondaryKey, reverse) {
  const moveSmaller = reverse ? 1 : -1
  const moveLarger = reverse ? -1 : 1
  return (a, b) => {
    if (a[primaryKey] < b[primaryKey]) {
      return moveSmaller
    }
    if (a[primaryKey] > b[primaryKey]) {
      return moveLarger
    }
    if (a[primaryKey] === b[primaryKey]) {
      if (a[secondaryKey] < b[secondaryKey]) {
        return 1
      }
      if (a[secondaryKey] > b[secondaryKey]) {
        return -1
      }
    }
    return 0
  }
}
export {
  ASCENDING,
  DESCENDING,
  containsBetween,
  sortBy,
  sortByTwoDesc,
  unique,
}

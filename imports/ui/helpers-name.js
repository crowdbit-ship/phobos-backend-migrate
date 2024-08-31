// src/utils/helper/_x_/name/joinName.js
function joinName(data = {}) {
  const { salut, fName, mName, lName, suffix } = data
  const fullName = `${salut ? `${salut.trim()} ` : ''}${
    fName ? `${fName.trim()} ` : ''
  }${mName ? `${mName.trim()} ` : ''}${
    lName ? lName.trim() : ''
  }${suffix ? ` ${suffix.trim()}` : ''}`.trim()
  return fullName
}
export { joinName }

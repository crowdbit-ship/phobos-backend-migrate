// src/utils/helper/_x_/regex.js
const emailRegex = /\S+@\S+\.\S+/

// src/forms/validation.js
const isEmail = (value) =>
  value && !emailRegex.test(value)
    ? 'Invalid email address'
    : void 0
export { isEmail }

function isUndefined (param, paramName) {
  if(typeof param === 'undefined') {
    throw new TypeError(`The passed parameter${paramName ? `: "${paramName}"` : ''} should not be undefined`)
  } else {
    return null;
  }
}

function number (param, paramName) {
  if (isNaN(param)) {
    throw new TypeError(`The passed parameter${paramName ? `: "${paramName}"` : ''} should not be a Number`)
  } else {
    return null;
  }
}

module.exports = {
  isUndefined,
  number
}
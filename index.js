const { number, isUndefined } = require('./utils/assertion');

const defaultOptions = {
  errorMessage: null
}

module.exports = {
  /**
   * isLength: matches the length
   * @param {number} max maximum length of characters
   * @param {number} min minimum length of characters
   * @param {object} options
   */
  isLength: function (max, min = 0, options = defaultOptions) {
    isUndefined(max, 'max')
    number(max, 'max')
    number(min, 'min')
    return function (props, propName) {
      const length = props[propName].length
      if (length >= min && (typeof max === 'undefined' || length <= max)) {
        return null;
      } else {
        return new Error(options.errorMessage || `The length of prop name: "${propName}" doesn't match`)
      }
    }
  }
}
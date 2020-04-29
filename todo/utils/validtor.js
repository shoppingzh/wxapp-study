/**
 * 字符串非空校验
 * @param {String} str 字符串
 */
function isBlank(str) {
  if (typeof str === 'undefined' || str == null) {
    return true;
  }
  if (typeof str !== 'string') {
    throw new TypeError('str must be a string')
  }
  return !str || !str.trim()
}

module.exports = {
  isBlank: isBlank
}
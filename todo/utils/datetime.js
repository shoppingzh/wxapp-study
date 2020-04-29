/**
 * 格式化日期时间
 * @param {Date} date 日期
 */
function formatDate(date) {
  if (!date) {
    return '';
  }
  var y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDay(),
      h = date.getHours(),
      min = date.getMinutes(),
      s = date.getSeconds();
  return [y, m, d].map(fix).join('/') + ' ' + [h, min, s].map(fix).join(':');
}

function fix(x) {
  x = x.toString()
  return !x[1] ? '0' + x : x
}

module.exports = {
  formatDate
}
const id = require('./_id');

/**
 * Checks if array contains an infix.
 * @param {Array} x an array
 * @param {Array} y infix?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isInfixOn(x, y, fn=null, ths=null) {
  if(y.length===0) return true;
  var fn = fn||id;
  var Y = y.length, i = -1, J = 0;
  var y1 = y.map(fn, ths);
  var m = new Array(Y).fill(false);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    for(var j=J; j>0; j--)
      m[j] = m[j-1] && u1===y1[j];
    m[0] = u1===y1[0];
    J = Math.min(J+1, Y-1);
    if(m[Y-1]) return true;
  }
  return false;
}
module.exports = isInfixOn;

/**
 * Segregates iterable keeping similar values together.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array<Array>} [satisfies, doesnt]
 */
function partition(x, fn, ths=null) {
  var t = [], f = [], i = -1;
  for(var v of x) {
    if(fn.call(ths, v, ++i, x)) t.push(v);
    else f.push(v);
  }
  return [t, f];
}
module.exports = partition;

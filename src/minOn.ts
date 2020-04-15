import id from './_id';
import type {mapFn} from './_types';

/**
 * Finds smallest value.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function minOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): T {
  var fn = fn||id, i = -1;
  var mk: U, mv: T;
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(i===0) { mk = k; mv = v; }
    if(k<mk) { mk = k; mv = v; }
  }
  return mv;
}
export default minOn;
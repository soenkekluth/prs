import flowright from 'lodash.flowright';

var Promise = Promise;

if (typeof Promise === 'undefined') {
  Promise = require('promise-polyfill');
  if (global) {
    global.Promise = Promise;
  }
  if (typeof window !== 'undefined') {
    window.Promise = Promise;
  }
}

/**
 * returns a new Promise
 *
 * @param {function} (resolve, [reject]) => ..
 * @example
 * prs(resolve => {
 * 	load(url, resolve);
 * }).then(...)
 *
 */
const prs = resolver => new Promise(resolver);

/**
 * creates a Promise of a none-promise function
 * you can also use:
 * `promisify() prsfy()` and `prs.fy()` or `prs.ensure()` or `prs.compose()`
 *
 * @param {function} fn
 * @name compose
 * @example
 * const fn = value => value;
 * const promise = prs.compose(fn);
 * const value = await promise('check');
 */
export const compose = fn => flowright(Promise.resolve.bind(Promise), fn);

/**
 * returns Promise.resolve
 * you can also use:
 * `res()` and `prs.res() prs.resolve`
 *
 * @param {any} *
 */
export const resolve = Promise.resolve.bind(Promise);

/**
 * returns Promise.reject
 * you can also use:
 * `rej()` and `prs.rej()` `prs.reject()`
 * @param {any} *
 */
export const reject = Promise.reject.bind(Promise);

/**
 * returns Promise.all
 *
 * @param {any} *
 */
export const all = Promise.all.bind(Promise);

prs.all = all;
prs.resolve = resolve;
prs.res = resolve;
prs.reject = reject;
prs.rej = reject;
prs.compose = compose;
prs.fy = compose;
prs.ensure = compose;

export { compose as promisify };
export { compose as prsfy };
export { resolve as res };
export { reject as rej };
export default prs;

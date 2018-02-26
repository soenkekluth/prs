const flowright = require('lodash.flowright');

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
 *
 * @param {function} func
 * @example
 * const func = value => value;
 * const promise = prs.compose(func);
 * const value = await promise('check');
 */
export const compose = func => flowright(Promise.resolve.bind(Promise), func);

/**
 * returns Promise.resolve
 *
 * @param {any} *
 */
export const resolve = Promise.resolve.bind(Promise);

/**
 * returns Promise.reject
 *
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

export { resolve as res };
export { reject as rej };
export default prs;

/**
 * JSDoc style named function type
 * @callback AddStuff
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

/** @type {AddStuff} */
const addStuff = (x, y) => x + y;

/**
 * TypeScript style inline function type
 * @typedef {(x: number, y: number) => number} TsAdd
 */

/** @type {TsAdd} */
const tsAdd = (x, y) => x + y;

/**
 * JSDoc style type function with function declaration
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function addDec(x, y) {
  return x + y;
}

/**
 * JSDoc style optional parameter
 * @param {number} [x] optional
 * @param {number=} y number or undefined
 * @param {number} [z=1] optional with default (default not show in type hint)
 */
function jsDocOptional(x, y, z = 1) {}


/**
 * JSDoc style rest parameter
 * @param {...number} num
 * @returns {number}
 */
function sum(...num) {
  return num.reduce((s, v) => s + v, 0);
}

/**
 * TypeScript style rest parameter
 * @param {number[]} num
 */
function tsSum(...num) {
  return num.reduce((s, v) => s + v, 0);
}

/**
 * No explicit return value
 * @returns {void}
 */
function noReturn() {
  console.log('no explicit return');
}

/**
 * Function never return
 * @returns {never}
 */
function neverReturn() {
  throw Error('ERRORRRRR');
}
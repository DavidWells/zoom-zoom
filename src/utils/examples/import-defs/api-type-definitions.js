// https://github.com/red-perfume/red-perfume-css/blob/main/api-type-definitions.js
// https://stackoverflow.com/questions/49836644/how-to-import-a-typedef-from-one-file-to-another-in-jsdoc-using-vs-code

/**
 * @file    Type definitions for the API and reusable functions/objects
 * @author  TheJaredWilcurt
 */

/**
 * OPTIONAL: console.error is called by default if verbose: true.
 *
 * Your own custom logging function called with helpful warning/error
 * messages from the internal validators. Only used if verbose: true.
 *
 * @callback {Function} CUSTOMLOGGER
 * @param    {string}   message       The human readable warning/error message
 * @param    {object}   [error]       Sometimes an error or options object is passed
 * @return   {void}
 */

/**
 * @typedef  {object}       OPTIONS
 * @property {boolean}      [verbose=true]  Logs out helpful warnings/errors using `customLogger` or console.error.
 * @property {boolean}      [uglify=false]  If `false` atomized classes are long (`.rp__padding__--COLOR12px`). If `true` they are short (`.rp__b5p`).
 * @property {string}       [input='']      A string of any valid CSS to be atomized
 */

/**
 * @typedef  {object} CLASSMAP
 * @property {{[key: string]: string[]}} classMapEntry  The key is the original classname, the value is an array of strings of atomized classes
 */

/**
 * @typedef  {object}  SELECTORCHUNK
 * @property {string}  type          The type of selector ('tag', 'attribute', 'pseudo')
 * @property {string}  name          Selector name ('class', 'hover')
 * @property {string}  [action]      Action ('element')
 * @property {string}  [value]       Actual selector value ('cow')
 * @property {boolean} [ignoreCase]  If casing should be ignored (false)
 * @property {string}  [namespace]   Not sure what this is (null)
 * @property {string}  [data]        Not sure what this is (null)
 * @property {string}  [original]    The original value for this selector ('.cow')
 */

/**
 * @typedef {SELECTORCHUNK[]} SELECTOR
 */

/**
 * @typedef {SELECTOR[]} SELECTORS
 */

/**
 * @typedef  {object} DECLARATION
 * @property {string} type      The type of AST ('declaration')
 * @property {string} property  The CSS property name ('background', 'width')
 * @property {string} value     The CSS value ('#F00', '100px')
 */

/**
 * @typedef {DECLARATION[]} DECLARATIONS
 */

/**
 * @typedef  {object}       RULE
 * @property {string}       type          The type of the AST ('rule')
 * @property {SELECTORS}    selectors     Array of arrays containing AST objects for each part of the CSS Selector
 * @property {DECLARATIONS} declarations  Array of declaration objects for each property/value pair
 */

/**
 * @typedef  {object} STYLESHEET
 * @property {string} [source]       Not sure what this is (undefined)
 * @property {RULE[]} rules          Array of all rules in the the stylesheet
 * @property {Array}  parsingErrors  Not sure what this is (empty array)
 */

/**
 * @typedef  {object}     STYLESHEETAST
 * @property {string}     type        The type of the AST ('stylesheet')
 * @property {STYLESHEET} stylesheet  Object containing the Rules AST
 */

/**
 * @typedef  {object} UGLIFYRESULT
 * @property {string} name   An uglified class name ('.rp__b5z2')
 * @property {number} index  The index number used (520958)
 */

/**
 * @typedef  {object}   OUTPUT
 * @property {CLASSMAP} classMap     Example: { '.cow': ['.rp__0', '.rp__1'], '.moo': ['.rp__2', '.rp__1'] }
 * @property {string}   atomizedCss  A string of atomized CSS styles
 * @property {string[]} styleErrors  Array of strings of errors that occurred, or empty array if no errors occurred
 */

/**
 * @type {OPTIONS}
 */
let OPTIONS;

/**
 * @type {CLASSMAP}
 */
let CLASSMAP;

/**
 * @type {SELECTORCHUNK}
 */
let SELECTORCHUNK;

/**
 * @type {SELECTOR}
 */
let SELECTOR;

/**
 * @type {SELECTORS}
 */
let SELECTORS;

/**
 * @type {DECLARATION}
 */
let DECLARATION;

/**
 * @type {DECLARATIONS}
 */
let DECLARATIONS;

/**
 * @type {RULE}
 */
let RULE;

/**
 * @type {STYLESHEET}
 */
let STYLESHEET;

/**
 * @type {STYLESHEETAST}
 */
let STYLESHEETAST;

/**
 * @type {UGLIFYRESULT}
 */
let UGLIFYRESULT;

/**
 * @type {OUTPUT}
 */
let OUTPUT;

module.exports = {
  OPTIONS,
  CLASSMAP,
  SELECTORCHUNK,
  SELECTOR,
  SELECTORS,
  DECLARATION,
  DECLARATIONS,
  RULE,
  STYLESHEET,
  STYLESHEETAST,
  UGLIFYRESULT,
  OUTPUT
};
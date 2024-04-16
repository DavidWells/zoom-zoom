// https://stackoverflow.com/questions/49836644/how-to-import-a-typedef-from-one-file-to-another-in-jsdoc-using-vs-code

/** 
* @typedef MyTypeHere 
* @prop {string} name  
* @prop {string} description 
*/

/**
 * @type {MyTypeHere}
 */
let MyTypeHere;

module.exports = {
  MyTypeHere,
}
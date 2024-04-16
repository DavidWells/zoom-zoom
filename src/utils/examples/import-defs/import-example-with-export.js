// https://stackoverflow.com/questions/49836644/how-to-import-a-typedef-from-one-file-to-another-in-jsdoc-using-vs-code

/** 
* @typedef MyType 
* @prop {string} name  
* @prop {string} description 
*/

/** @type {MyType} */
let MyType

export default {
  MyType
}
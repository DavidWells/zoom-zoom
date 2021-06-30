const fs = require('fs')
const path = require('path')
const dox = require('doxxx')

var code = `
/**
 * tester
 * @template T
 * @extends {Set<T>}
 * @example
 * lol()
 * console.log('hi')
 */
class SortableSet extends Set {
  // ...
}


/**
 * Does xyz
 * @returns {Promise<{
 *   pass: number,
 *   fail: number
 * }>}
 */
async function run() {
  return Promise.resolve({
    pass: 1,
    fail: 3
  })
}


/**
* Renders a <Button /> component
* @param { import("./types").Pet } p - Pet type
* @param  {object} [props] - button props
* @param  {string} [props.text] - My button
* @param  {string} [props.textColor] - the color of the text in the button
* @param  {string} [props.bgColor] - the background color of the button
* @param  {object} [props.overrideStyles] - used to set the CSS of the button
* @return {React.ReactElement} - React component
* @example
  <Button>
    hi
  </Button>
*/
export default function Button(props = {}) {
  return (
    <button>{props.text || 'my button'}</button>
  )
}
`;

var codeTwo = `
interface User {
  name: string;
  id: number;
}

/**
 * Renders a <Button /> component
 */
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
`

const filePath = path.resolve(__dirname, './src/Button/index.jsx')
const fileCode = fs.readFileSync(filePath, 'utf-8')
const obj = dox.parseComments(code);
const { inspect } = require('util')
console.log('result')
console.log(inspect(obj, {showHidden: false, depth: null}))
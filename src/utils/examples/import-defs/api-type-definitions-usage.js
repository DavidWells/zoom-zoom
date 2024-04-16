const { OPTIONS } = require('./api-type-definitions.js')

/**
 * Creates OS based shortcuts for files, folders, urls, and applications.
 *
 * @param  {OPTIONS} options  Options object for each OS, and global options
 * @return {boolean}          True = success, false = failed to create the icon or set its permissions (Linux).
 */
function createDesktopShortcut (options) {
  console.log(options)
  // the library code
  return false
}

createDesktopShortcut({
  verbose: true,
  uglify: true,
  input: 'body { color: red; }'
})
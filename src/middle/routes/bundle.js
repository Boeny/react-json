const readFileSync = require('readfilesync')(SRC)
const config       = require(SRC + 'config')

let js = readFileSync(config.bundle)

module.exports = () => js
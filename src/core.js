import {mergeOptions} from './util.js'
import defaultOptions from './default-options.js'

function Log4s (options) {
  options = options || {}

  this.maxLines = mergeOptions(options, defaultOptions, 'maxLines')
  this.lineMaxChars = mergeOptions(options, defaultOptions, 'lineMaxChars')
  this.logFilename = mergeOptions(options, defaultOptions, 'logFilename')
  this.lineBreak = mergeOptions(options, defaultOptions, 'lineBreak')
  this.enableLog = mergeOptions(options, defaultOptions, 'enableLog')
  this.needTimestamp = mergeOptions(options, defaultOptions, 'needTimestamp')

  this.logs = []
}

export default Log4s

import * as util from './util.js'
import Log4s from './core.js'

Log4s.prototype.log = function (log) {
  if (this.enableLog && log) {
    log = util.toString(log)
    log = util.limitCharLength(log, this.lineMaxChars)
    this.$addOneLog(log)
  }
}

Log4s.prototype.$addOneLog = function (log) {
  log = this.needTimestamp ? util.getLocaleTimeString() + ' ' + log : log
  this.logs.push(log)
  util.checkNeedShift(this.logs, this.maxLines)
}

Log4s.prototype.getAllLog = function () {
  return this.logs.join(this.lineBreak)
}

Log4s.prototype.search = function (key) {
  return this.logs.filter((item) => {
    return item.indexOf(key) >= 0
  }).join(this.lineBreak)
}

Log4s.prototype.cleanAll = function () {
  this.logs = []
}

Log4s.prototype.download = function () {
  util.download(this.getAllLog(), util.getLocaleTimeString().replace(/:/g, '-') + '-' + this.logFilename)
}

export default Log4s

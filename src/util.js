export function toString (log) {
  if (typeof log === 'string') {
    return log
  }
  try {
    return JSON.stringify(log)
  } catch (error) {
    return ''
  }
}

export function getLocaleTimeString () {
  var timestamp = new Date()
  var date = timestamp.getDate()
  var month = ('0' + (timestamp.getMonth() + 1)).slice(-2)
  var hrs = ('0' + timestamp.getHours()).slice(-2)
  var mins = ('0' + timestamp.getMinutes()).slice(-2)
  var secs = ('0' + timestamp.getSeconds()).slice(-2)
  var ms = ('00' + timestamp.getMilliseconds()).slice(-3)

  return month + '-' + date + ' ' + hrs + ':' + mins + ':' + secs + '.' + ms
}

export function download (content, fileName) {
  console.log(fileName)
  if (window.navigator.msSaveBlob) {
    // for ie 10 and later
    try {
      var blobObject = new window.Blob([content])
      window.navigator.msSaveBlob(blobObject, fileName)
    } catch (e) {
      console.log(e)
    }
  } else {
    var file = 'data:text/plain;charset=utf-8,'
    var encoded = encodeURIComponent(content)
    file += encoded
    var a = document.createElement('a')
    a.href = file
    a.target = '_blank'
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
}

export function checkNeedShift (arr, maxLength) {
  if (arr.length > maxLength) {
    arr.shift()
  }
}

export function limitCharLength (log, lineMaxChars) {
  return log.length > lineMaxChars ? log.substr(0, lineMaxChars) : log
}

export function isUndefined (v) {
  return void 0 === v
}

export function mergeOptions (source, target, key) {
  return isUndefined(source[key]) ? target[key] : source[key]
}

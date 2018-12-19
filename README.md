# log4s

做这个工具是因为：

- 某些时候看服务端日志太麻烦。
- 测试小姐姐提Bug时，给的相关信息又无法分析出问题原因。

所以我做了这个工具，让测试小姐姐可以点击某个按钮，就能把日志下载下来，然后将日志附在Bug详情中。更加方便的排查问题。

![](https://raw.githubusercontent.com/wangduanduan/img/f51854ec1b75d0f603bd0cbbd92211afdff5f7ba/images/Jietu20181219-215506.jpg)

# 特点

- 支持>= ie10
- 支持日志下载

# 安装

```
yarn add log4s
```

# 使用

```
import Log4s from 'log4s' 
// 或者 const Log4s from 'log4s'
// 或者 直接script https://cdn.jsdelivr.net/npm/log4s@1.0.1/dist/log4s.umd.js 引入到html中

let log = new Log4s()

log4s.log('你好')
log4s.log('你好 abc')
log4s.log('你好, def')
log4s.log('你好, ahha')
log4s.log('你好,a')
log4s.search('a')
```

日志下载后，内容如下：

```
12-19 21:23:43.882 你好
12-19 21:23:43.882 你好 abc
12-19 21:23:43.882 你好, def
12-19 21:23:43.882 你好, ahha
12-19 21:23:43.882 你好,a
```


# Log4s(options) 配置

默认配置： 

```
export default {
  maxLines: 2500,  // 最多纪录多少行日志
  lineMaxChars: 2500, // 每行日志最多允许多少个字符，超出会截取
  logFilename: 'log4s.log', // 下载时文件名称
  lineBreak: '\n', // 下载文件时，每行日志之间的换行符
  enableLog: true, // 是否启动日志记录功能
  needTimestamp: true // 每行日志是否需要时间戳
}
```

# 实例方法

```
let log = new Log4s()
```

- log(string|object) 写日志
- getAllLog() 获取所有日志
- search(keyword) 按关键词搜索日志
- cleanAll() 清空日志
- download() 下载日志




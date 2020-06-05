var request = require('request')
var cheerio = require('cheerio')

var url = 'https://www.manhuafen.com/rank/'

function videocrawler (url, callback) {
  // 获取页面
  request(url, function (err, res) {
    if (err) {
      callback(err)
    }

    var $ = cheerio.load(res.body.toString()) // 利用cheerio对页面进行解析

    var videoList = []
    var arrays = new Array()
    $('.li_content_dec a img').each(function () {
      console.log($(this.src))
      var obj = {}
      obj.title = $(this).parent().text().trim()
      obj.url = $(this).parent()[0].href
      obj.jpg = $(this)[0].src
      console.log(obj)
      arrays.push(obj)
    })
    // console.log('arrays' + arrays.toLocaleString())

    $('.video li a').each(function () {
      var $title = $(this).parent().parent().parent().text().trim()
      var title = $title.split('\n')
      var text = $(this).text().trim()
      text = text.split('\n')
      // console.log(text);
      var time = text[1].match(/\((\d+\:\d+)\)/)
      var item = {
        title: title[0],
        url: 'http://www.imooc.com' + $(this).attr('href'),
        name: text[0],
        duration: time[1]
      }
      var s = item.url.match(/video\/(\d+)/)
      // console.log(s);
      if (Array.isArray(s)) {
        item.id = s[1]
        videoList.push(item)
      }
    })

    callback(null, videoList)
  })
}

videocrawler(url, function (err, videoList) {
  if (err) {
    return console.log(err)
  }
  console.log(videoList)
})

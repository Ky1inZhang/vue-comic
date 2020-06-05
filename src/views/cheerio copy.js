var cheerio = require('cheerio')

var url = 'http://www.imooc.com/learn/857'

const axios = require('axios')
url = 'https://www.manhuafen.com/rank/'

function videocrawler (url) {
  axios.get(url, []) // 详情页面
    .then(res => {
      var $ = cheerio.load(res.data.toString()) // 利用cheerio对页面进行解析
      // eslint-disable-next-line no-array-constructor
      var arrays = new Array()
      $('.li_content_dec a img').each(function () {
        console.log($(this.src))
        var obj = {}
        obj.title = $(this).parent()[0].title
        obj.url = $(this).parent()[0].href
        obj.jpg = $(this)[0].src
        console.log(obj)
        arrays.push(obj)
      })
      // console.log('arrays' + arrays.toLocaleString())
      var videoList = []

      $('.video li a').each(function () {
        var $title = $(this).parent().parent().parent().text().trim()
        var title = $title.split('\n')
        var text = $(this).text().trim()
        text = text.split('\n')
        // console.log(text);

        var time = text[1].match(/\((\d+:\d+)\)/)
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
      // console.log(videoList)
    //   callback(null, videoList)
    })
    .catch(err => {
      console.error(err)
    })
}

videocrawler(url)

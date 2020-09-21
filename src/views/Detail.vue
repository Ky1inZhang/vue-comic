<template>
  <div id="Detail">
    <div class v-show="showFlg">
      <div class="fa-left">
        <router-link tag="i" class="fa fa-chevron-left" aria-hidden="true" :to="pre" title="上一章"></router-link>
      </div>
      <div class="fa-right">
        <router-link tag="i" class="fa fa-chevron-right" aria-hidden="true" :to="next" title="下一章"></router-link>
      </div>
      <div class="fa-fa-home">
        <router-link tag="i" to="/" class="fa fa-home" aria-hidden="true" title="首页"></router-link>
      </div>
    </div>
    <img class="noimg" :src="noimg" alt srcset />
    <div class="imgs" v-for="(item,index) in imgs" :key="index">
      <!-- <img class="img-responsive" @click="show()" v-lazy="hostUrl+item" alt /> -->
      <img class="img-responsive" @click="show()" v-lazy="item" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    comicId: {
      type: String
    },
    detailId: {
      type: String
    },
    index: {
      type: String
    }
  },
  data () {
    return {
      hostUrl: '',
      imgs: [],
      noimg: '',
      pre: '',
      next: '',
      showFlg: true
    }
  },
  beforeCreate () {
    $(window).load(function () {
      $('body').addClass('loaded')
      $('#loader-wrapper').remove()
    })
  },
  mounted () {
    const titles = JSON.parse(localStorage.getItem('titles'))
    this.pre = `/p/${this.comicId + titles[this.index].pre}/${Number(this.index) - 1}`
    this.next = `/p/${this.comicId + titles[this.index].next}/${Number(this.index) + 1}`
    this.getData()
  },
  methods: {
    getData () {
      const url = `${this.HOST}/${this.comicId}/${this.detailId}.html`
      this.$axios.get(url, [])
        .then(res => {
          // const pattern = '[^"]+(?=";var chapterPath)' // 不支持负向零宽断言所以采用这种写法
          const chapterImages = res.data.match('[^"]+(?=";var chapterPath)')[0]
          // const pattern2 = '[^"]+(?=";var chapterPrice)'
          const imgpath = res.data.match('[^"]+(?=";var chapterPrice)')
          if (imgpath) this.hostUrl = imgpath[0]
          this.decrypt(chapterImages)
          // decrypt20200823.decrypt20180904(136401, '001话', 1802, '一拳超人')
        })
        .catch(err => {
          console.error(err)
        })
    },
    decrypt (chapterImages) {
      var CryptoJs = this.CryptoJs
      var key = CryptoJs.enc.Utf8.parse('KA58ZAQ321oobbG1')
      var iv = CryptoJs.enc.Utf8.parse('A1B2C3DEF1G321oo')
      var decrypt = CryptoJs.AES.decrypt(chapterImages, key, {
        iv: iv,
        mode: CryptoJs.mode.CBC,
        padding: CryptoJs.pad.Pkcs7
      })
      var decryptedStr = decrypt.toString(CryptoJs.enc.Utf8)
      chapterImages = JSON.parse(decryptedStr.toString())
      // console.log(chapterImages)

      this.imgs = chapterImages.map(filename => { return this.getRealPath(filename) })

      if (this.imgs.length === 0) {
        this.noimg =
          'https://tvax1.sinaimg.cn/large/c167ccbfgy1gfczs5sfg1j20m80df74v.jpg'
      }
    },
    getRealPath (filename) {
      var host
      if (typeof chapterImageHost !== 'undefined') {
        // host = chapterImageHost;
      } else {
        host = 'https://manga.mipcdn.com/i/s/img01.eshanyao.com'.trim('/')
      }

      if (filename === undefined) return host + '/images/default/common.png'
      if (filename.match(/^https?:\/\/(images.dmzj.com|imgsmall.dmzj.com)/i)) {
        return 'https://img01.eshanyao.com/showImage2.php?url=' + encodeURI(filename)
      }
      if (filename.match(/^[a-z]\//i)) {
        return 'https://img01.eshanyao.com/showImage2.php?url=' +
        encodeURI('https://images.dmzj.com/' + filename)
      }
      if (filename.match(/^https?:\/\/(manhua.qpic.cn)/i)) {
        return 'https://manga.mipcdn.com/i/s/' + encodeURI(filename)
      }
      if (filename.match(/^https?:\/\/(mhimg.eshanyao.com)/i)) {
        return 'https://manga.mipcdn.com/i/s/' + encodeURI(filename)
      }
      if (filename.match(/^https?:\/\/(dd.wstts.com)/i)) {
        return 'https://manga.mipcdn.com/i/s/' + encodeURI(filename)
      }
      if (filename.match(/^(http:|https:|ftp:|^)\/\//i)) return filename
      filename = this.hostUrl.trim('/') + '/' + filename.trim('/')
      return host + '/' + filename.trim('/')
    },
    show () {
      this.showFlg = !this.showFlg
    }
  },
  computed: {
    //
  },
  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  }
}
</script>
<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">
.fa:hover {
  z-index: -1;
  display: block;
  opacity: 1;
  cursor: pointer;
}
.fa-chevron-left {
  width: 100%;
  font-size: 8em;
  opacity: 0.5;
  padding-top: 200px;
  height: 100%;
}
.fa-chevron-right {
  width: 100%;
  font-size: 8em;
  opacity: 0.5;
  padding-top: 200px;
  height: 100%;
}
.fa-fa-home {
  position: fixed;
  z-index: 99;
  padding-top: 20px;
  float: left;
  left: 20px;
  font-size: 3em;
  opacity: 0.5;
}
.fa-left {
  position: fixed;
  width: 30%;
  height: calc(100vh);
}
.fa-right {
  position: fixed;
  width: 30%;
  right: 0%;
  height: calc(100vh);
}
// .Detail{
//   text-align: center;
//   width: 100%;
// }
// .imgs{
//   margin: 0 auto;
// }
img {
  width: calc(43.8vw);
  text-align: center;
  // display: inline-block;
  height: auto;
  max-width: 100%;
}
// @media screen and (max-width: 901px) {
//   img {width: calc(100vw);}
// }
/* 设置了浏览器宽度不大于901px时 abc 显示200px宽度 */
@media screen and (max-width: 500px) {
  img {
    width: calc(100vw);
  }
}
/* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */
</style>

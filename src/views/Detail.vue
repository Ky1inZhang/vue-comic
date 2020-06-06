<template>
  <div id="Detail">
    <div class="fa-left">
      <router-link tag="i" class="fa fa-chevron-left" aria-hidden="true" :to='pre' title="上一章"></router-link>
    </div>
    <div class="fa-right">
      <router-link tag="i" class="fa fa-chevron-right" aria-hidden="true" :to="next" title="下一章"></router-link>
    </div>
    <div class="fa-fa-home">
      <router-link tag="i" to='/' class="fa fa-home" aria-hidden="true" title="首页"></router-link>
    </div>
    <img class="noimg" :src="noimg" alt="" srcset="">
    <div class="imgs" v-for="(item,index) in imgs" :key="index">
      <img class="img-responsive"  v-lazy="hostUrl+item" alt />
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
      next: ''
    }
  },
  mounted () {
    const titles = JSON.parse(sessionStorage.getItem('titles'))
    this.pre = `/p/${this.comicId + titles[this.index].pre}/${Number(this.index) - 1}`
    this.next = `/p/${this.comicId + titles[this.index].next}/${Number(this.index) + 1}`
    this.getData()
  },
  methods: {
    getData () {
      const url = `${this.HOST}/${this.comicId}/${this.detailId}.html`
      this.$axios.get(url, [])
        .then(res => {
          const pattern = '[^"]+(?=";var chapterPath)' // 不支持负向零宽断言所以采用这种写法
          const imgsAES = res.data.match(pattern)[0]
          const pattern2 = '[^"]+(?=";var chapterPrice)'
          const imgpath = res.data.match(pattern2)
          if (imgpath) {
            this.hostUrl = 'https://img01.eshanyao.com/' + imgpath[0]
            if (this.$log) console.log('hostUrl: ' + this.hostUrl)
          }
          this.decrypt(imgsAES)
        })
        .catch(err => {
          console.error(err)
        })
    },
    decrypt (chapterImages) {
      var CryptoJs = this.CryptoJs
      var key = CryptoJs.enc.Utf8.parse('123456781234567G') // 十六位字符作为密钥
      var iv = CryptoJs.enc.Utf8.parse('ABCDEF1G34123412')
      var decrypt = CryptoJs.AES.decrypt(chapterImages, key, {
        iv: iv,
        mode: CryptoJs.mode.CBC,
        padding: CryptoJs.pad.Pkcs7
      })
      var decryptedStr = decrypt.toString(CryptoJs.enc.Utf8)
      chapterImages = JSON.parse(decryptedStr.toString())
      // if (chapterImages.length > 2) chapterImages.splice(chapterImages.length - 2, 2)
      if (!this.hostUrl && !chapterImages[0].includes('mhimg.eshanyao.com') && chapterImages[0].includes('images.dmzj.com')) {
        this.hostUrl = 'https://img01.eshanyao.com/showImage.php?url='
        console.log('use php get url & this.host:' + this.hostUrl)
      }
      // this.imgs = this.imgs.concat(chapterImages)
      this.imgs = chapterImages
      if (this.imgs.length === 0) this.noimg = 'https://tvax1.sinaimg.cn/large/c167ccbfgy1gfczs5sfg1j20m80df74v.jpg'
    }
  },
  computed: {
    //
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>
<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">
  .fa:hover{
    z-index: -1;
    display: block;
    opacity: 1;
    cursor: pointer;
  }
  .fa-chevron-left{
    width: 100%;
    font-size: 8em;
    opacity: 0.5;
    padding-top: 200px;
  }
  .fa-chevron-right{
    width: 100%;
    font-size: 8em;
    opacity: 0.5;
    padding-top: 200px;
  }
  .fa-fa-home{
    position: fixed;
    z-index: 99;
    padding-top: 20px;
    float: left;
    left: 20px;
    font-size: 3em;
    opacity: 0.5;
  }
  .fa-left{
    position: fixed;
    width: 30%;
    height: calc(100vh);
  }
  .fa-right{
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
  img{
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
    img {width: calc(100vw);}
  }
  /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */
</style>

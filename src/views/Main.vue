<template>
  <div id="Main">

    <section class="container">
    <!-- js中的this=vue 传递事件的target $event.target -->
    <div @click="submitFn($event);" @keyup.enter="submitFn($event);">
      <div class="search-wrapper">
          <div class="input-holder">
              <input type="text" class="search-input" placeholder="Type to search" />
              <button class="search-icon" @click="searchToggle(this, $event);"><span></span></button>
          </div>
          <span class="close" @click="searchToggle(this, $event);"></span>
          <div class="result-container">

          </div>
      </div>
    </div>
    </section>
    <div class="container">
      <div class="row">
        <table class="table table-hover table-bordered">
          <caption class="h2 text-warning text-center" style="text-align: center;caption-side: top;">排行榜</caption>
          <div class="col-md-12">
            <ul class="titles" v-for="(item,index) in titles" :key="index">
              <div v-if="item.title">
                <router-link class="link"  :to='"/p" + item.url' :title="item.title">
                  <img class="jpg" :src="item.jpg">
                  <span class="span">{{item.title | toFixed}}</span>
                </router-link>
              </div>
            </ul>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import '@/assets/css/search-form.css'
import cheerio from 'cheerio'
export default {
  name: 'Main',
  data () {
    return {
      titles: []
    }
  },
  mounted () {
    var url = '/r/rank/'
    var str = '.li_content_dec a img'
    this.getData(url, str)
  },
  methods: {
    getData (url, str) {
      this.$axios
        .get(url, {
          // headers:{origin:"Access-Control-Allow-Origin"}
        })
        .then(res => {
          var $ = cheerio.load(res.data.toString()) // 利用cheerio对页面进行解析
          // eslint-disable-next-line no-array-constructor
          const arrays = new Array()
          $(str).each(function () {
            var obj = {}
            obj.title = $(this).parent().prop('title')
            obj.url = $(this).parent().prop('href').match('/[1-9]\\d*/')[0]
            obj.jpg = $(this).prop('src')
            arrays.push(obj)
          })
          // 转为json 再转为数组对象
          // this.titles = JSON.parse(JSON.stringify(arrays))
          this.titles = arrays
        })
        .catch(err => {
          console.error(err)
        })
    },
    refresh (key) {
      var url = 'r/search/?keywords=' + key
      var str = '.image-link img'
      this.getData(url, str)
    },
    searchToggle (obj, evt) {
      obj = evt.target
      var container = $(obj).closest('.search-wrapper')
      if (!container.hasClass('active')) {
        container.addClass('active')
        evt.preventDefault()
      } else if (container.hasClass('active') && $(obj).closest('.input-holder').length === 0) {
        container.removeClass('active')
      }
    },
    submitFn (e) {
      // e.target=e.toElement
      var value = $('.search-wrapper').find('.search-input').val()
      if (value && (e.target.parentNode.localName === 'button' || e.keyCode === 13)) this.refresh(value)
      // evt.preventDefault()
    }
  },
  filters: {
    toFixed (input) {
      // return (input === undefined ? '' : input).substr(0, 10)
      return input.length > 10 ? input.substr(0, 5) + '...' : input
    }
  }
}
</script>
<style lang="less">
  .container{
    padding: calc(3vh);
  }
  .titles{
    float: left;
    width: 50%;
    height: 180px;
    padding: 0 2px;
    line-height: 30px;
    overflow: hidden
  }
  .jpg{
    left: 0%;
    float: left;
    width: auto;
    height: 180px;
  }
  .link{
    color: whitesmoke;
  }
  .span{
    font-size: 24px;
    text-decoration: none;
  }
  a:link { text-decoration: none; color: rgb(233, 224, 231)}
  a:active { text-decoration:blink}
  a:hover { text-decoration:none; color: red}
  a:visited { text-decoration: none;color: rgb(202, 167, 52)}
</style>

<template>
  <div class>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="referrer" content="never" />
    <meta http-equiv="Access-Control-Allow-Origin" content="*" />
    <title>租借女友漫画</title>
    <!-- https://m.hcs68.com/ -->
    <div class="float-fa" v-show="showFlg">
      <div class="fa-left" @click="postNext('pre')">
        <router-link tag="i" class="fa fa-chevron-left" aria-hidden="true" :to="pre" title="上一章"></router-link>
      </div>
      <div class="fa-right" @click="postNext('next')">
        <router-link tag="i" class="fa fa-chevron-right" aria-hidden="true" :to="next" title="下一章"></router-link>
      </div>
      <div class="fa-fa-home">
        <router-link tag="i" to="/" class="fa fa-home" aria-hidden="true" title="首页"></router-link>
      </div>
      <div class="fa-fa-navicon" >
        <router-link tag="i" to="/" class="fa fa-navicon" aria-hidden="true" title="目录"></router-link>
      </div>
    </div>
    <div id="main">
      <div class="loading" style="display: none;">正在努力加载下一章节……</div>
      <div class="pre">已经是第一章了</div>
      <div class="next">已经是最后一章了</div>

      <div class="imgs" id="list" v-for="(item,index) in imgs" :key="index">
        <img class="img-responsive" v-real-img='item' @click="show()" onerror="false" v-lazy="item">
      </div>
    </div>
  </div>
</template>

<script>
import gf from '@/mock/gf'
export default {
  name: 'GF',
  data () {
    return {
      pre: '',
      next: '',
      a: [],
      b: 0, // 章节
      c: -1, // 页数
      imgs: [],
      showFlg: true
    }
  },
  created () {
    this.$http.jsonp('https://data.utools.club/jsonp/index', { params: {} }).then(function (res) {
      console.log(res.body)
      // this.a = gf.index
      this.a = res.body
      this.imgs = [`https://res.hcs68.com/image/view/${this.a[this.b]}/${++this.c}.webp`]
      console.log(this.imgs + '*')
    })
  },
  props: {},
  components: {},
  mounted () {
    window.addEventListener('scroll', this.throttle(this.handleScroll, 200), true)

    // https://blog.csdn.net/u012443286/article/details/106134000
    // 将VueLazyload 的dispatchEvent设置为true，表明开启img的原生dom事件 监听img的原生error事件
    var that = this
    window.addEventListener('error', function (e) {
      if (e.target.dataset) {
        var elem = e.target
        var src = e.target.dataset.src
        var index = that.imgs.indexOf(src)
        if (index >= 0) {
          that.imgs.splice(index, 1)
        }
        if (elem.localName === 'img') {
          elem.parentNode.removeChild(elem)
        }
      }
    }, true)
    window.addEventListener('error', this.throttle(function (e) {
      if (e.target.dataset) {
        console.log('e' + e.target.dataset.src)
        var elem = e.target
        if (elem.localName === 'img') {
          that.b = that.b + 1
          that.c = -1
          that.getNext()
        }
      }
    }, 5000), true /* 指定事件处理函数在捕获阶段执行 */)
  },
  methods: {
    handleScroll () {
      var scrollTop = $(window).scrollTop()
      var scrollHeight = $(document).height()
      var windowHeight = $(window).height()
      if (scrollTop + windowHeight >= scrollHeight - 50) {
        this.getNext()
      }
    },
    getNext (num) {
      num = num == null ? 2 : num
      this.c = this.c + 1
      this.imgs.push(`https://res.hcs68.com/image/view/${this.a[this.b]}/${this.c}.webp`)
      console.log(`https://res.hcs68.com/image/view/${this.a[this.b]}/${this.c}.webp`)
      if (num - 1 > 0) this.getNext(num - 1)
    },
    show () {
      this.showFlg = !this.showFlg
    },
    throttle (func, delay) {
      // var timer = null
      var startTime = Date.now() // 设置开始时间
      return function () {
        var curTime = Date.now()
        var remaining = delay - (curTime - startTime) // 剩余时间
        var context = this
        var args = arguments
        // clearTimeout(timer);
        if (remaining <= 0) { // 第一次触发立即执行
          func.apply(context, args)
          startTime = Date.now()
        }
        // else {  // 开启后至少执行两次
        // timer = setTimeout(func, remaining);   //取消当前计数器并计算新的remaining
        // }
      }
    },
    postNext (data) {
      this.imgs = []
      this.b = data === 'pre' ? this.b - 1 : this.b + 1
      this.c = -1
      this.imgs = []
      this.getNext()
    }
  }
}
</script>

<style lang="less" scoped>
img {
  text-align: center;
  width: calc(45vw);
  height: auto;
  max-width: 100%;
}
.loading, .pre, .next {
  display: none;
  width: 50%;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.fa:hover {
  z-index: -1;
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
  left: 1vw;
  font-size: 3rem;
  opacity: 0.5;
}
.fa-fa-navicon {
  position: fixed;
  right: 1vmin;
  padding-right: 1vmax;
  font-size: 3rem;
  opacity: 0.5;
}
.fa-left {
  position: fixed;
  width: 30%;
  height: 80vh;
  margin-top: 10vh;
  padding-left: 5vw;
}
.fa-right {
  position: fixed;
  width: 30%;
  right: 1%;
  height: 80vh;
  margin-top: 10vh;
  padding-right: 5vw;
}

@media screen and (max-width: 500px) {
  img {
    width: calc(100vw);
  }
}
</style>

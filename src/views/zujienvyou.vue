<template>
  <div class="zujienvyou">
    <div class="float-fa" v-show="showFlg">
      <div class="fa-left" @click="postMessage('pre')">
        <div tag="i" class="fa fa-chevron-left" aria-hidden="true" title="上一章"></div>
      </div>
      <div class="fa-right" @click="postMessage('next')">
        <div tag="i" class="fa fa-chevron-right" aria-hidden="true" :to="next" title="下一章"></div>
      </div>
      <div class="fa-fa-home">
        <router-link tag="i" to="/"  class="fa fa-home" aria-hidden="true" title="首页"></router-link>
      </div>
      <div class="fa-fa-navicon" @click="postMessage('navicon')">
        <div tag="i"  class="fa fa-navicon" aria-hidden="true" title="目录"></div>
      </div>
    </div>
    <!-- <iframe class="iframe" frameborder="0" src="https://baidu.com" style="width:100%;height:100%;"></iframe> -->
    <iframe class="iframe" id="mainIframe" ref="mainIframe" frameborder="0" src="static/zujienvyou/zujienvyou.html" height="100%" width="100%"></iframe>
  </div>
</template>
<script type="text/javascript">
window.onerror = function () {
  return true
}

</script>
<script>
export default {
  data () {
    return {
      pre: '',
      next: '',
      showFlg: true
    }
  },
  mounted () {
    // window.addEventListener('message', this.handleMessage);//mounted钩子函数中
    window.onmessage=this.handleMessage
  },
  created () {
    $('.zujienvyou').height(this.window.outerHeight + 'px')
  },
  methods: {
    handleMessage (event) {
      // 根据上面制定的结构来解析iframe内部发回来的数据
      const data = event.data;
      // console.log('vue receive :',data);
      if(data.hasOwnProperty('params') && data.params.hasOwnProperty('showFlg')){
        this.show()
      }
    },
    postMessage(data) {
      // 获得对应iframe的window对象  并发送消息
      this.$refs['mainIframe'].contentWindow.postMessage(data, '*')
      if(data === 'navicon') this.show()
    },
    show () {
      this.showFlg = !this.showFlg
    }
  }
}
</script>

<style lang="less" scoped>
  .zujienvyou{
    font-size: 0;
    z-index: 99999;
    height: 100%;
    overflow: hidden;
    overflow-y: hidden;
  }
  .iframe{
    margin:0;
    padding:0;
    overflow-y:hidden;
  }
  .fa:hover {
    z-index: -1;
    opacity: 1;
    cursor: pointer;
  }
  .fa-chevron-left {
    width: 100%;
    font-size: 8rem;
    opacity: 0.5;
    padding-top: 200px;
    height: 100%;
  }
  .fa-chevron-right {
    z-index: -2;
    width: 100%;
    font-size: 8rem;
    opacity: 0.5;
    padding-top: 200px;
    height: 100%;
    right: 10vw;
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
</style>

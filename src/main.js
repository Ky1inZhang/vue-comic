import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
// import store from './store'
import Axios from 'axios'
import CryptoJs from 'crypto-js'
// import '@/assets/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import VueLazyLoad from 'vue-lazyload'
import directives from '@/lib/directives'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('@/assets/img/error.jpg'),
  loading: require('@/assets/img/loading.jpg'),
  attempt: 3,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll', 'click'],
  dispatchEvent: true // 开启后可以监听原生DOM error事件
})
Vue.use(directives)

Vue.config.productionTip = false
Vue.prototype.HOST = '/api'
Vue.prototype.$axios = Axios
Vue.prototype.CryptoJs = CryptoJs
Vue.prototype.window = window

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

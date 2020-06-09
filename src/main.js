import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Axios from 'axios'
import CryptoJs from 'crypto-js'
// import '@/assets/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('@/assets/img/error.jpg'),
  loading: require('@/assets/img/loading.jpg'),
  attempt: 3,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll']
})

Vue.config.productionTip = false
Vue.prototype.HOST = '/api'
Vue.prototype.$axios = Axios
Vue.prototype.CryptoJs = CryptoJs

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

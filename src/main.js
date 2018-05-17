// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/font-awesome.min.css'
import './assets/css/style.css'
import './assets/css/style-mobile.css'
import './assets/css/master-layout.css'
import './assets/css/style_common.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vuex from 'vuex'
import store from './store/store'
import VueLazyLoad from 'vue-lazyload'
import './assets/css/common.css'
import utils from 'util/util'
import axios from 'axios'
import dialog from './components/common/dialog/dialog.vue'

Vue.use(VueLazyLoad,{
  error:'/static/error.png',
  loading:'/static/loading.gif'
})
Vue.component('myDialog', dialog)
Vue.use(ElementUI);
Vue.use(vuex);
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

router.afterEach((to, from) => {
  document.documentElement.scrollTop=0
  document.body.scrollTop = 0
})

/* eslint-disable no-new */
axios.get('/static/global-config.json').then((res) => {
  Vue.prototype.k_Settings = res.data
  axios.setConfig(Vue.prototype.k_Settings)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
  })
})

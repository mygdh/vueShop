// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import ElementUI from 'element-ui'
import { Message } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'

import axios from 'axios'
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/';
Vue.prototype.$http = axios
Vue.prototype.$message = Message

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

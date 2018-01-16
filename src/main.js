// The Vue build version to load with the `import` 

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

const FastClick = require('fastclick')
FastClick.attach(document.body)

import { AjaxPlugin } from 'vux'
import { WechatPlugin } from 'vux'

Vue.use(AjaxPlugin)
Vue.use(WechatPlugin)

console.log(AjaxPlugin)
console.log(Vue.wechat)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

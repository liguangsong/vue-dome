import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/dist/antd.css'
import formCreate from '@form-create/ant-design-vue'

import Moment from 'moment'
import storage from '@/storage/storage'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$storage = storage

Vue.prototype.$moment = Moment
Vue.prototype.$axios = axios
Vue.prototype.qs = qs

Vue.component(Button.name, Button)
Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(formCreate)

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

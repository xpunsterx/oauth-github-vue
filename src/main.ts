import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import InfiniteLoading from 'vue-infinite-loading'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(InfiniteLoading, {
  props: {
    spinner: 'default',
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

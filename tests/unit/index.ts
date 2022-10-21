import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import InfiniteLoading from 'vue-infinite-loading'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(InfiniteLoading, {
    props: {
        spinner: 'default',
    }
})

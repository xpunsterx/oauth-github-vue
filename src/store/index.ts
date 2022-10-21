import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import users from '@/store/modules/users'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    users
  },
  plugins: [
    createPersistedState({
      key: 'oauth-github-vue',
      paths: ['auth.token']
    })
  ]
})


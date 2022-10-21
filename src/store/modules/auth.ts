import axios from '@/axios-instance'
import { ActionTree, MutationTree, GetterTree } from "vuex"

interface State {
  code: null | string,
  token: null | {
    "access_token": string,
    "scope": string,
    "token_type": string
  }
}

const state: State = {
  code: null,
  token: null,
};

const getters = <GetterTree<State, any>>{
  isAuth: state => !!state.token
}

const actions = <ActionTree<State, any>>{
  setCode({ commit }, value) {
    commit('SET_CODE', value)
  },
  async fetchToken({ state, commit }) {
    const data = {
      client_id: '6b586ff618ecc59ec12f',
      client_secret: '59e8420227e55c3af36da2204d0296bdd44f343b',
      code: state.code,
    }

    const result = await axios.post(
        'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
        data
    )

    commit('SET_TOKEN', result)
  }
}

const mutations = <MutationTree<State>>{
  SET_CODE (state, value) {
    state.code = value
  },
  SET_TOKEN (state, value) {
    state.token = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

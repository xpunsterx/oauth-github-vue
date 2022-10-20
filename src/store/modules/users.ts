import axios from '@/axios-instance'

interface UsersParamsInterface {
  since?: number;
  per_page?: number;
}

const actions = {
  fetchUsers({}, params: UsersParamsInterface) {
    return axios.get('https://api.github.com/users', { params })
  },
  fetchUser({}, name: string) {
    return axios.get(`https://api.github.com/users/${name}`)
  }
};

export default {
  namespaced: true,
  actions,
}

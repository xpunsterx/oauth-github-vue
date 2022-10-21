import axios from 'axios'
import store from './store'

const instance = axios.create({
    headers: {
      'Accept': 'application/json'
    }
});

instance.interceptors.request.use( config => {
    if (store.state.auth.token?.data && !!config.headers) {
        const { access_token, token_type } = store.state.auth.token.data
        config.headers['Authorization'] = `${token_type} ${access_token}`
    }
    return config;
},  (error) => {
    return Promise.reject(error)
})

export default instance

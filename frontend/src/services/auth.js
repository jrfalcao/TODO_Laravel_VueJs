import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  login: (url, email, password) => {
    return Vue.axios.post(`${url}auth/login`, { email, password })
  },
  register: (url, name, email, password) => {
    return Vue.axios.post(`${url}user/create`, { name, email, password })
  },
  loadUser: async (url, token) => {
    return await Vue.axios.post(`${url}user/me`, { token })
  },
  create: (url, name, email, password) => {
    return Vue.axios.post(`${url}user/create`, { name, email, password })
  }
}

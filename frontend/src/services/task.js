import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  create: (url, task, user, token) => {
    return Vue.axios.post(`${url}task/create`, { task, user, token })
  },
  getByUser: (url, user, token) => {
    return Vue.axios.post(`${url}task/getall`, { user, token })
  },
  delete: async (url, task, token) => {
    return await Vue.axios.post(`${url}user/me`, { task, token })
  },
  update: (url, task, status, token) => {
    return Vue.axios.post(`${url}user/create`, { task, status, token })
  }
}

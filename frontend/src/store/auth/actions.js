import * as types from './mutations-types'
import * as storage from '@/http/storage'
import services, { api } from '@/http'

export const ActionLogin = async ({ dispatch }, payload) => {
  return services.auth.login(api, payload.email, payload.password).then((res) => {
    dispatch('ActionSetUser', res.data.user)
    dispatch('ActionSetToken', res.data.token)
    return res
  })
}

export const ActionRegister = async ({ dispatch }, payload) => {
  return services.auth.register(api, payload.name, payload.email, payload.password).then((res, err) => {
    dispatch('ActionSetUser', res.data.user)
    dispatch('ActionSetToken', res.data.token)
    return res
  }).catch(err => err)
}

export const ActionCheckToken = ({ dispatch }, state) => {
  if (state) {
    console.log(state.token)
    return Promise.resolve(state.token)
  }

  const token = storage.getLocalToken()

  if (!token) {
    return Promise.reject(new Error('Token inválido'))
  }

  dispatch('ActionSetToken', token)
  dispatch('ActionLoadUser')
}

export const ActionLoadUser = ({ dispatch }) => {
  return new Promise((resolve, reject) => {
    try {
      services.auth.loadUser(api, storage.getLocalToken()).then((res, err) => {
        dispatch('ActionSetUser', res.user)
        resolve()
      }).catch((error) => {
        dispatch('ActionSignOut')
        reject(error)
      })
    } catch (error) {
      dispatch('ActionSignOut')
      reject(error)
    }
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.deleteLocalToken()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}

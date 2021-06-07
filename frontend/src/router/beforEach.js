import store from '../store'

export default async (to, from, next) => {
  document.title = `${to.name} - Task List`

  if (['Login', 'Register'].includes(to.name) === false && (!store.getters['auth/hasToken'])) {
    try {
      await store.dispatch('auth/ActionCheckToken')

      next({ name: to.name })
    } catch (err) {
      next({ name: 'Login' })
    }
  } else {
    if (['Login', 'Register'].includes(to.name) && store.getters['auth/hasToken']) {
      next({ name: 'Task' })
    } else {
      next()
    }
  }
}

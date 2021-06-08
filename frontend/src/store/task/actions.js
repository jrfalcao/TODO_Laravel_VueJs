import * as storage from '@/http/storage'
import services, { api } from '@/http'

export const ActionGetTasks = async (payload) => {
  console.log(payload)
  return await services.task.getByUser(api, payload.user_id, storage.getLocalToken()).then((res) => {
    console.log(res)
    return res
  })
}

// export const ActionCreateTask = async ({ dispatch }, payload) => {
//   return services.auth.register(api, payload.name, payload.email, payload.password).then((res, err) => {
//     dispatch('ActionSetUser', res.data.user)
//     dispatch('ActionSetToken', res.data.token)
//     return res
//   }).catch(err => err)
// }

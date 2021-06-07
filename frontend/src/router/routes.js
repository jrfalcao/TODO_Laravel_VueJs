import { routes as task } from './task'
import { routes as auth } from './auth'

export default [
  ...auth,
  ...task
]

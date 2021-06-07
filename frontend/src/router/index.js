import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import beforeEach from './beforEach'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

router.beforeEach(beforeEach)

export default router

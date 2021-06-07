export default [
  {
    path: '/',
    name: 'Task',
    component: () => import(/* webpackChunkName: "task" */ '../../views/task/Task.vue')
  },
  {
    path: '/new_tasks',
    name: 'NewTask',
    component: () => import(/* webpackChunkName: "new_task" */ '../../views/task/NewTask.vue')
  }
]

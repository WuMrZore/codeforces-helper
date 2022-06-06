import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login-and-register',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/login-and-register',
        name: 'LoginAndRegister',
        component: () => import('../views/loginAndRegister/index.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
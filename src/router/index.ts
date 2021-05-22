import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // name: Home,
    component: Home
  },
  {
    path: '/cart',
    // name: Cart,
    component: Cart
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

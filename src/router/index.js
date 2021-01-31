import Vue from 'vue'
import VueRouter from 'vue-router'
import Rus from '../views/Rus.vue'
import USA from '../views/USA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Rus
  },
  {
    path: '/ru',
    component: Rus
  },
  {
    path: '/us',
    component: USA
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

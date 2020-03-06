import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/jiajian.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'jiajian',
    component: () => import(/* webpackChunkName: "about" */ '../views/jiajian.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue')
  },
  {
    path: '/message',
    name: 'message',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/message.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import { auth } from '../firebase'

//import { createRouter, createWebHashHistory } from 'vue-router'

Vue.use(VueRouter)

router.beforeEach((to, from, next)=> {
  const requiresAuth = to.matched.some(x=> x.meta.requiresAuth)

  if(requiresAuth && !auth.currentUser) {
    next('/login') 
  } else {
    next()
  }
})


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  }
]

/*
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
*/

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('@/views/Tree.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('@/views/EditUser.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/Map.vue')
    }
  ]
})

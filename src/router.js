import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Tree from '@/views/Tree.vue'
import Edit from '@/views/EditUser.vue'
import Map from '@/views/Map.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})

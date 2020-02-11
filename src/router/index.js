import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Monitor from '@/components/Monitor'
import Energy from '@/components/Energy'
import Table from '@/components/Table'
import System from '@/components/System'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        { name: 'monitor', path: '/monitor', component: Monitor},
        { name: 'energy',path: '/energy', component: Energy},
        { name: 'table',path: '/table', component: Table},
        { name: 'system',path: '/system', component: System},
      ]
  },
  ]
})

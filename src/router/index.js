import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: test
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/stock',
      name: 'stock',
      component: Layout,
      children: [{
        path: 'search',
        component: () => import('@/pages/stock/stockSearch/stockList')
      }]
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: Layout,
      children: [{
        path: 'map',
        component: () => import('@/pages/monitor/map/thermalMap')
      }]
    },
    {
      path: '/manage',
      name: 'manage',
      component: Layout,
      children: [{
        path: 'alarm',
        component: () => import('@/pages/manage/alarm/alarmList')
      }]
    }
  ]
})

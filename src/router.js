import Vue from 'vue'
import Router from 'vue-router'
import AddAccount from '@/views/AddAccount.vue'
import ManageAccount from '@/views/ManageAccount.vue'
import GetReports from '@/views/GetReports.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AddAccount
    },
    {
      path: '/manage',
      name: 'manage',
      component: ManageAccount
    },
    {
      path: '/reports',
      name: 'reports',
      component: GetReports
    },
  ]
})

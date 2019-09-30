/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:38 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 02:55:12
 */


import Vue from 'vue'
import Router from 'vue-router'
import routerApi from '@/service/api/routerApi'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: routerApi.login,
      name: 'login',
      component: () => import("./views/Login.vue")
    },
    {
      path: routerApi.home,
      name: 'home',
      component: () => import("./views/Home.vue")
    },
  ]
})

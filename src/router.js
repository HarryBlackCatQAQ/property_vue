/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:38 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 18:50:49
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
      path: routerApi.getLogin(),
      name: 'login',
      component: () => import("./views/Login.vue")
    },
    {
      path: routerApi.getHome(),
      name: 'home',
      component: () => import("./views/Home.vue"),
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: routerApi.getPage1(),
          name:"page1",
          component: () => import("./views/home/page1.vue"),
        },
        {
          path: routerApi.getPage2(),
          name:"page2",
          component: () => import("./views/home/page2.vue"),
        }
      ]
    }
  ]
})

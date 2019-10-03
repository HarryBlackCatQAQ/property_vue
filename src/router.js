/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:38 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-04 02:21:35
 */


import Vue from 'vue'
import Router from 'vue-router'
import routerApi from '@/service/api/routerApi'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
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

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if(!store.getters['user/getIsLogin'] && (to.path != routerApi.getLogin())){
    next({path:routerApi.getLogin()})
  }
  else{
    next();
  }
  
});



export default router;

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import util from "@/service/util.js";

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about1',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },{
      path:"/page1",
      beforeEnter(to,from,next){
        window.location.href = util.linkPage("page1");
      },
    }
  ]
})

/*
 * @Author: Harry 
 * @Date: 2019-10-01 18:21:22 
 * @Last Modified by:   Harry-mac 
 * @Last Modified time: 2019-10-01 18:21:22 
 */


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isAsideMenuOpen:false
  },
  getters:{
    getIsAsideMenuOpen(state){
      return state.isAsideMenuOpen;
    }
  },
  mutations: {
      changeIsAsideMenuOpen(state){
        state.isAsideMenuOpen = !state.isAsideMenuOpen
      }
  },
  actions: {

  }
})

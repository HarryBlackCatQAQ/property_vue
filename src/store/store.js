/*
 * @Author: Harry 
 * @Date: 2019-10-01 18:21:22 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-02 23:26:15
 */


import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import home from './modules/homeModule'
import login from './modules/loginModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    home,
    login
  }
})

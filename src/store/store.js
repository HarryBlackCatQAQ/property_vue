/*
 * @Author: Harry 
 * @Date: 2019-10-01 18:21:22 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-02 14:46:55
 */


import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import home from './modules/homeModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    home
  }
})

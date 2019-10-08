/*
 * @Author: Harry 
 * @Date: 2019-10-01 18:21:22 
 * @Last Modified by: Hovees
 * @Last Modified time: 2019-10-08 17:35:26
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import home from './modules/homeModule'
import login from './modules/loginModule'
import user from './modules/userModule'
import property from './modules/propertyModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    home,
    login,
    user,
    property
  }
})

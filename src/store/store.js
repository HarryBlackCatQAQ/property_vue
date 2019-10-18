/*
 * @Author: Harry 
 * @Date: 2019-10-01 18:21:22 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-18 12:58:39
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
import roleManagement from './modules/roleManagementModule'
import property from './modules/propertyModule'
import complaintAndSuggestion from './modules/complaintAndSuggestionModule'
import building from './modules/buildingModule'
import house from './modules/houseModule'
import logManagement from './modules/logManagementModule'

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
    roleManagement,
    property,
    complaintAndSuggestion,
    building,
    house,
    logManagement
  }
})

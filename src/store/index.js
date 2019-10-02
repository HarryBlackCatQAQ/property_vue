/*
 * @Author: Hovees
 * @Date: 2019-10-02 21:06:22
 * @Last Modified by:   Hovees-hwx
 * @Last Modified time: 2019-10-02 21:06:22
 */

import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
  }
})
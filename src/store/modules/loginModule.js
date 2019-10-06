/*
 * @Author: Hovees
 * @Date: 2019-10-02 21:06:22
 * @Last Modified by:   Hovees-hwx
 * @Last Modified time: 2019-10-02 21:49:30
 */

const state = {
  isLoginModelShow: false,
  isForgetPasswordModelShow: false,
  isRegisteredModelShow: false
}

const mutations = {
  ['IS_LOGIN_MODEL_SHOW'](state, payload) {
    state.isLoginModelShow = payload
  },
  ['IS_FORGET_PASSWORD_MODEL_SHOW'](state, payload) {
    state.isForgetPasswordModelShow = payload
  },
  ['IS_REGISTERED_MODEL_SHOW'](state, payload) {
    state.isRegisteredModelShow = payload
  },
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
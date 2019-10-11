/*
 * @Author: Hovees
 * @Date: 2019-10-02 21:06:22
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-10 15:09:14
 */

const state = {
  isLoginModelShow: false,
  isForgetPasswordModelShow: false,
  isRegisteredModelShow: false,
  isTokenErrorToLogin:false
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
  changeIsTokenErrorToLogin(state){
    state.isTokenErrorToLogin = !state.isTokenErrorToLogin;
  }
}

const getters = {
  getIsTokenErrorToLogin(state){
    return state.isTokenErrorToLogin;
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
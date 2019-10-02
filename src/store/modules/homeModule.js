/*
 * @Author: Harry 
 * @Date: 2019-10-02 14:47:29 
 * @Last Modified by:   Harry-mac 
 * @Last Modified time: 2019-10-02 14:47:29 
 */


export default {
  namespaced:true,
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
}
/*
 * @Author: Hovees 
 * @Date: 2019-10-15 10:16:15 
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-15 16:41:40
 */

const state = {
  houses: [],
  rowCount: 0,
  pageNum: 1,
  pageSize: 10,
  loading: false,
  addHouseDialog: false,
  deleteHouseDialog: false,
  editHouseDialog: false,
  recordHouse: ''
}

const mutations = {
  ['GET_HOUSE'](state, payload) {
    if (payload.content) {
      state.properties = payload.content.map((houseModule) => {
        return Object.assign({}, houseModule, {id: houseModule.id})
      })
    }
    state.rowCount = payload.totalElements
  },
  ['SET_PAGE_NUM'](state, payload) {
    state.pageNum = payload
  },
  ['SET_PAGE_SIZE'](state, payload) {
    state.pageSize = payload
  },
  ['LOADING'](state, payload) {
    state.loading = payload
  },
  ['ADD_HOUSE_DIALOG'](state, payload) {
    state.addHouseDialog = payload
  },
  ['DELETE_HOUSE_DIALOG'](state, payload) {
    state.deleteHouseDialog = payload
  },
  ['EDIT_HOUSE_DIALOG'](state, payload) {
    state.editHouseDialog = payload
  },
  ['RECORD_HOUSE'](state, payload) {
    state.recordHouse = payload
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
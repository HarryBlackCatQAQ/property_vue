/*
 * @Author: Hovees
 * @Date: 2019-10-08 14:50:53
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-10 16:57:44
 */

const state = {
  properties: [],
  rowCount: 0,
  pageNum: 1,
  pageSize: 10,
  loading: false,
  addPropertyDialog: false,
  deletePropertyDialog: false,
  editPropertyDialog: false,
  searchForm: {
    name: '',
    location: '',
    uid: '',
  },
  recordProperty: ''
}

const mutations = {
  ['GET_PROPERTY'](state, payload) {
    if (payload.content) {
      state.properties = payload.content.map((propertyModule) => {
        return Object.assign({}, propertyModule, {id: propertyModule.id})
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
  ['ADD_PROPERTY_DIALOG'](state, payload) {
    state.addPropertyDialog = payload
  },
  ['DELETE_PROPERTY_DIALOG'](state, payload) {
    state.deletePropertyDialog = payload
  },
  ['EDIT_PROPERTY_DIALOG'](state, payload) {
    state.editPropertyDialog = payload
  },
  ['RECORD_PROPERTY'](state, payload) {
    state.recordProperty = payload
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
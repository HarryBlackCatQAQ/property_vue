/*
 * @Author: Hovees
 * @Date: 2019-10-08 14:50:53
 * @Last Modified by:   Hovees-hwx
 * @Last Modified time: 2019-10-08 16:10:53
 */

const state = {
  properties: [],
  rowCount: 0,
  pageNum: 1,
  pageSize: 10,
  searchForm: {
    propertyName: ''
  }
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
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
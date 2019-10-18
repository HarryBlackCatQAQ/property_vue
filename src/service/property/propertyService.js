/*
 * @Author: Hovees
 * @Date: 2019-10-08 16:23:50
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-18 11:29:17
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'

const that = _this._this

export default {
  async getFirst() {
    let res
    await that.$get(api.property.url.getFirst, {})
    .then(response => {
      res = response
      if(res.message === '查询成功') {
        that.$store.commit('property/SET_PROPERTY_NAME', res.data.name)
        that.$store.commit('property/SET_PROPERTY_ID', res.data.id)        
      }
    })
  },
  async getProperty() {
    let res
    let pageNum = that.$store.state.property.pageNum
    let pageSize = that.$store.state.property.pageSize
    let rowCount = that.$store.state.property.rowCount
    if ((pageNum - 1) * pageSize >= rowCount && rowCount !== 0) {
      that.$store.commit('property/SET_PAGE_NUM', pageNum - 1)
      pageNum = that.$store.state.property.pageNum
    }
    await that.$get(api.property.url.findAll, {
      pageNum: pageNum,
      pageSize: pageSize
    })
    .then(response => {
      res = response
      if(res.message === '查询成功') {
        that.$store.commit('property/GET_PROPERTY', response.data)
      }
    })
    return res
  },
  async getAllProperty() {
    let res
    await that.$get(api.property.url.getAllProperty, {})
    .then(response => {
      res = response
      if(res.message === '查询成功') {
        that.$store.commit('property/SET_CHANGE_SELECT_PROPERTIES', response.data)
      }
    })
  },
  async checkPropertyName(propertyName) {
    let res
    await that.$get(api.property.url.checkPropertyName, {
      propertyName: propertyName
    })
    .then(response => {
      res = response
    })
    return res
  },
  async insert(addPropertyModel) {
    let res
    await that.$post(api.property.url.insert, addPropertyModel)
    .then(response => {
      res = response
    })
    return res
  },
  async update(recordProperty) {
    let res
    await that.$patch(api.property.url.update, recordProperty)
    .then(response => {
      res = response
    })
    return res
  },
  async delete(recordProperty) {
    let res
    await that.$delBody(api.property.url.delete, recordProperty)
    .then(response => {
      res = response
    })
    return res
  }
}
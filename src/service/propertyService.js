/*
 * @Author: Hovees
 * @Date: 2019-10-08 16:23:50
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-10 17:03:14
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'

const that = _this._this

export default {
  async getProperty() {
    let res
    let pageNum = that.$store.state.property.pageNum
    let pageSize = that.$store.state.property.pageSize
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
    await that.$post(api.property.url.insert, {
      name: addPropertyModel.name,
      location: addPropertyModel.location,
      uid: addPropertyModel.uid
    })
    .then(response => {
      res = response
    })
    return res
  },
  async update(recodeProperty) {
    let res
    await that.$patch(api.property.url.update, {
      id: recodeProperty.id,
      name: recodeProperty.name,
      location: recodeProperty.location,
      uid: recodeProperty.uid,
    })
    .then(response => {
      res = response
    })
    return res
  }
}
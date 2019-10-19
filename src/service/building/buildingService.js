/*
 * @Author: Hovees 
 * @Date: 2019-10-15 10:50:35 
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-18 16:09:29
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'
import building from '../../store/modules/buildingModule'
import property from '../../store/modules/propertyModule'

const that = _this._this

export default {
  async insert(building) {
    let res
    let propertyId = property.state.propertyId
    building.propertyId = propertyId
    await that.$post(api.building.url.insert, building)
    .then(response => {
      res = response
    })
    return res
  },
  async delete(building) {
    let res
    await that.$delBody(api.building.url.delete, building)
    .then(response => {
      res = response
    })
    return res
  },
  async update(building) {
    let res
    await that.$patch(api.building.url.update, building)
    .then(response => {
      res = response
    })
    return res
  },
  async getBuilding() {
    let res
    let pageNum = building.state.pageNum
    let pageSize = building.state.pageSize
    let propertyId = property.state.propertyId
    let rowCount = building.state.rowCount    
    if ((pageNum - 1) * pageSize >= rowCount && rowCount !== 0) {
      that.$store.commit('building/SET_PAGE_NUM', pageNum - 1)
      pageNum = building.state.pageNum
    }
    await that.$get(api.building.url.findAllByPropertyId, {
      pageNum: pageNum,
      pageSize: pageSize,
      propertyId: propertyId
    })
    .then(response => {
      res = response
      if(res.message === '查询成功') {
        that.$store.commit('building/GET_BUILDING', res.data)
      }
    })
    return res
  },
  async checkPropertyBuildingName(buildingName) {
    let res
    let propertyId = property.state.propertyId
    await that.$get(api.building.url.checkPropertyBuildingName, {
      propertyId: propertyId,
      buildingName: buildingName
    })
    .then(response => {
      res = response
    })
    return res
  }
}
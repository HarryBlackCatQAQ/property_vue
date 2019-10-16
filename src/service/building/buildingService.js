/*
 * @Author: Hovees 
 * @Date: 2019-10-15 10:50:35 
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-16 10:46:25
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'

const that = _this._this

export default {
  async getBuilding() {
    let res
    let pageNum = that.$store.state.building.pageNum
    let pageSize = that.$store.state.building.pageSize
    let propertyId = that.$store.state.property.propertyId
    let rowCount = that.$store.state.building.rowCount    
    if ((pageNum - 1) * pageSize >= rowCount && rowCount !== 0) {
      that.$store.commit('building/SET_PAGE_NUM', pageNum - 1)
      pageNum = that.$store.state.building.pageNum
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
  }
}
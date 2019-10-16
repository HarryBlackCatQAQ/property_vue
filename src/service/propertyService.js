/*
 * @Author: Hovees
 * @Date: 2019-10-08 16:23:50
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-16 12:13:54
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'
import propertyModule from '@/store/modules/propertyModule'

const that = _this._this

export default {
  async getProperty() {
    let res
    let pageNum = propertyModule.state.pageNum
    let pageSize = propertyModule.state.pageSize
    await that.$get(api.property.url.findAll, {
      pageNum: pageNum,
      pageSize: pageSize
    })
    .then(response => {
      res = response
    })
    return res
  }
}
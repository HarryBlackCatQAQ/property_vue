/*
 * @Author: Hovees
 * @Date: 2019-10-08 16:23:50
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-08 16:23:50
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'

var that = _this._this;

export default {
  async getProperty(pageNum, pageSize) {
    let res;
    await that.$get(api.property.url.findAll, {
      pageNum: pageNum,
      pageSize: pageSize
    })
    .then(response => {
      res = response;
    })
    return res;
  }
}
/*
 * @Author: Harry 
 * @Date: 2019-10-04 01:23:09 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-04 02:04:53
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'

var that = _this._this;

export default {
    async logout() {
            let res;

        await that.$get(api.logout.url)
            .then(response => {
                res = response;
                // console.log(response);
                localStorage.clear();
                that.$store.commit('user/cleanInfo');
                // console.log(that.$store.getters['user/getUsername'])
            })
            .catch(err => {
                console.log(err);
            })

            return res;
    }
}
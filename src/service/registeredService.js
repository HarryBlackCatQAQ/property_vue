/*
 * @Author: Harry 
 * @Date: 2019-10-01 14:38:34 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 15:15:10
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'
import util from "@/service/util";

var that = _this._this;

export default {
    async checkUserName(username){
        
        let res;
        await that.$get(api.checkUserName.url,{
            username:username
        })
        .then(response => {
            res = response;
        })
        

        return res;
    },

    async registeredUser(user){

        let res;
        await that.$post(api.registeredUser.url,{
            username:user.username,
            nickname:user.nickname,
            password:util.SHA1(user.pass),
            role:0
        })
        .then(response => {
            res = response;
        })
        

        return res;


    }
}
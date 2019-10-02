/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:17 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 15:27:18
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'
import util from "@/service/util";

var that = _this._this;

export default {
    async login(username,password,rememberMe){
        let res;

        await that.$post(api.login.url, {
            username: username,
            password: util.SHA1(password)
        })
        .then(response =>{
            res = response;
        });

        if(res.flag){
            localStorage.setItem("token",res.token);
        }
    
        return res;    
    }
};
/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:17 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 02:52:49
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'
import util from "@/service/util";

var that = _this._this;

export default {
    async login(username,password,rememberMe){

        // password = util.SHA1(password);
        let res;

        await that.$post(api.login.url, {
            username: username,
            password: password
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
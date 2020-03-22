/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:17 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2020-03-19 15:38:25
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'
import util from "@/service/util";

var that = _this._this;

export default {
    async login(username,password,rememberMe,validateCode){
        let res;
        console.log(util.SHA1(password))
        //fc1200c7a7aa52109d762a9f005b149abef01479
        await that.$post(api.login.url, {
            username: username,
            password: util.SHA1(password),
            rememberMe: rememberMe,
            validateCode:validateCode
        })
        .then(response =>{
            if(response.flag){
                let user = response.data;
                localStorage.setItem("user",JSON.stringify(user))
                localStorage.setItem("isLogin",true)
                that.$store.commit('user/setUsername',user.username)
                that.$store.commit('user/setNickname',user.nickname)
                that.$store.commit('user/setRole',user.authorities)
                that.$store.commit('user/setId',user.id)
                that.$store.commit('user/setIsLogin',true)
            }
            res = response;
        });

        if(res.flag){
            localStorage.setItem("token",res.token);
        }
    
        return res;    
    }
};
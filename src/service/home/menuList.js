/*
 * @Author: Harry 
 * @Date: 2019-10-04 15:39:57 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-11 00:12:34
 */

import _this from '@/main'
import routerApi from '@/service/api/routerApi'

var that = _this._this;

export default {
    getList(){
        // console.log("@@@")
        return get();
    }    
}

/**
 * 判断用户权限
 */
function get(){
    let roleName = that.$store.getters['user/getRolename']
    let list = []

    list = list.concat(getPublic());
    if(roleName == "系统管理员"){
        list = list.concat(getSystemAdministrator())
    }
    else if (roleName === '物业管理员') {
        list = list.concat(getPropertyAdministrator())
    }
    return list;
}

/**
 * list Model
 * @param {string} name 
 * @param {string} url 
 * @param {string} icon 
 */
function model(name,url,icon){
    return {
        name:name,
        icon:icon,
        url:url
    }
}

/**
 * 获取公共模块
 */
function getPublic(){
    return [
        model(routerApi.getHomeName(),
        routerApi.getHome(),
        'el-icon-setting'),

        model(routerApi.getPage1Name(),
        routerApi.getPage1CompleteUrl(),
        'el-icon-document'),

        model(routerApi.getPage2Name(),
        routerApi.getPage2CompleteUrl(),
        'el-icon-document')
    ]
}


/**
 * 获取业主模块
 */
function getOwner(){

}

/**
 * 获取物业管理员模块
 */
function getPropertyAdministrator(){
    return [
        model(routerApi.property.getPropertyName(),
            routerApi.property.getPropertyCompleteUrl(),
            'el-icon-s-home'),
    ]
}

/**
 * 获取系统管理员模块
 */
 function getSystemAdministrator(){
    return[
        model(routerApi.roleManagement.getRoleManagementName(),
        routerApi.roleManagement.getRoleManagement(),
        "el-icon-user"),

        model(routerApi.logManagement.getLogManagementName(),
        routerApi.logManagement.getLogManagement(),
        "el-icon-s-order")
    ]
 }
/*
 * @Author: Harry 
 * @Date: 2019-10-04 15:39:57 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-16 01:16:03
 */

import routerApi from '@/service/api/routerApi'


export default {
    getList(that){
        return get(that);
    },    
}

/**
 * 判断用户权限
 */
function get(that){
    let roleName;
    if(typeof(that) == "string"){
        roleName = that;
    }
    else{
        roleName = that.$store.getters['user/getRolename']
    }
    
    let list = []

    list = list.concat(getPublic());
    if(roleName == "系统管理员"){
        list = list.concat(getSystemAdministrator())
    }
    else if (roleName === '物业管理员') {
        list = list.concat(getPropertyAdministrator())
    }
    else if(roleName === "业主"){
        list = list.concat(getOwner())
    }
    return list;
}

/**
 * list Model
 * @param {string} name 
 * @param {string} url 
 * @param {string} icon 
 * @param {boolean} isSub 
 * @param {arrays} sub 
 */
function model(name,url,icon,isShow,isSub,sub){
    let isSub_tp = false;
    let sub_tp = []
    if(isSub != undefined){
        isSub_tp = isSub;
        sub_tp = sub;
    }

    if(isShow == undefined){
        isShow = true;
    }
    return {
        name:name,
        icon:icon,
        url:url,
        isShow:isShow,
        isSub:isSub_tp,
        sub:sub_tp
    }
}

/**
 * subs model
 * @param {string} name 
 * @param {string} url 
 * @param {string} icon 
 */
function subs(name,url){
    return {
        name:name,
        url:url
    }
}

/**
 * 获取公共模块
 */
function getPublic(){
    return [
        //系统首页
        model(routerApi.getHomeName(),
        routerApi.getHome(),
        'el-icon-setting'),

        //page1例子
        model(routerApi.getPage1Name(),
        routerApi.getPage1CompleteUrl(),
        'el-icon-document'),

        //page2例子
        model(routerApi.getPage2Name(),
        routerApi.getPage2CompleteUrl(),
        'el-icon-document'),

        //子目录例子
        model("子目录",
        "",
        "el-icon-s-order",
        true,
        true,
        [
            subs(routerApi.getPage1Name(),
            routerApi.getPage1CompleteUrl()),
            
            subs(routerApi.getPage2Name(),
            routerApi.getPage2CompleteUrl()),
        ])
    ]
}


/**
 * 获取业主模块
 */
function getOwner(){
    return [
        //投诉建议申请单
        model(routerApi.complaintAndSuggestion.getComplaintAndSuggestionName(),
        "",
        "el-icon-edit-outline",
        true,
        true,
        [
            subs(routerApi.complaintAndSuggestion.getOwnerSheetName(),
            routerApi.complaintAndSuggestion.getOwnerSheet()),

            subs(routerApi.complaintAndSuggestion.getCreateSheetName(),
            routerApi.complaintAndSuggestion.getCreateSheet())
        ]),
    ]
}

/**
 * 获取物业管理员模块
 */
function getPropertyAdministrator(){
    return [
        //楼盘
        model(routerApi.property.getPropertyName(),
            routerApi.property.getPropertyUrl(),
            'el-icon-s-home'),

        //楼栋(不显示)
        model(routerApi.property.building.getBuildingName(),
            routerApi.property.building.getBuildingCompleteUrl(),
            'el-icon-s-home',
            false),

        //投诉建议申请单
        model(routerApi.complaintAndSuggestion.getComplaintAndSuggestionName(),
        "",
        "el-icon-edit-outline",
        true,
        true,
        [
            subs(routerApi.complaintAndSuggestion.getOwnerSheetName(),
            routerApi.complaintAndSuggestion.getOwnerSheet()),

            subs(routerApi.complaintAndSuggestion.getCreateSheetName(),
            routerApi.complaintAndSuggestion.getCreateSheet())
        ]),
    ]
}

/**
 * 获取系统管理员模块
 */
 function getSystemAdministrator(){
    return[
        //楼盘
        model(routerApi.property.getPropertyName(),
            routerApi.property.getPropertyUrl(),
            'el-icon-s-home'),

        //楼栋(不显示)
        model(routerApi.property.building.getBuildingName(),
            routerApi.property.building.getBuildingCompleteUrl(),
            'el-icon-s-home',
            false),

        //投诉建议申请单
        model(routerApi.complaintAndSuggestion.getComplaintAndSuggestionName(),
        "",
        "el-icon-edit-outline",
        true,
        true,
        [
            subs(routerApi.complaintAndSuggestion.getOwnerSheetName(),
            routerApi.complaintAndSuggestion.getOwnerSheet()),
            
            subs(routerApi.complaintAndSuggestion.getCreateSheetName(),
            routerApi.complaintAndSuggestion.getCreateSheet())
        ]),

        //用户管理
        model(routerApi.roleManagement.getRoleManagementName(),
        routerApi.roleManagement.getRoleManagement(),
        "el-icon-user"),

        //日志管理
        model(routerApi.logManagement.getLogManagementName(),
        "",
        "el-icon-s-order",
        true,
        true,
        [
            subs(routerApi.logManagement.getLogWebsocketName(),
            routerApi.logManagement.getLogWebsocket())
        ]),
    ]
 }
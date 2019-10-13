/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:44 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-13 17:40:14
 */


export default {
    //登录-->自定义的登录
    login: {
        url: '/auth/login'
    },
    checkUserName:{
        url: '/registered/checkUserName'
    },
    registeredUser:{
        url: '/registered/registeredUser'
    },
    logout:{
        url:'/logout'
    },
    roleManagement:{
        getUserList:{
            url:"/admin/getUserList"
        },
        delUser:{
            url:"/admin/delUser"
        },
        updatedUser:{
            url:"/admin/updateUser"
        },
        selectUserByType:{
            url:"/admin/selectUserByType"
        }
    },
    property: {
        url: {
            insert: '/property/insert',
            delete: '/property/delete',
            update: '/property/update',
            findAll: '/property/findAll',
            checkPropertyName: '/property/checkPropertyName'
        }
    },
    complaintAndSuggestion:{
        url:{
            create:'/api/ComplaintAndSuggestion/create'
        }
    }

};

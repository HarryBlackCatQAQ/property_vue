/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:44 
<<<<<<< HEAD
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-15 13:24:05
=======
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-16 12:21:11
>>>>>>> Hovees-hwx
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
            getFirst: '/property/getFirst',
            checkPropertyName: '/property/checkPropertyName'
        }
    },
    complaintAndSuggestion:{
        url:{
            create:'/api/ComplaintAndSuggestion/create',
            uploadImage:"/api/fileUpload/uploadComplaintAndSuggestionImage",
            queryOwner:"/api/ComplaintAndSuggestion/query"
        }
    },
    building: {
        url: {
          findAll: '/building/findAll',
          findAllByPropertyId: '/building/findAllByPropertyId'
        }
    },

};

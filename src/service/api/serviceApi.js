/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:44 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-19 16:47:30
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
            getAllProperty: '/property/getAllProperty',
            getFirst: '/property/getFirst',
            checkPropertyName: '/property/checkPropertyName'
        }
    },
    complaintAndSuggestion:{
        url:{
            create:'/api/ComplaintAndSuggestion/create',
            uploadImage:"/api/fileUpload/uploadComplaintAndSuggestionImage",
            queryOwner:"/api/ComplaintAndSuggestion/query",
            delOWner:"/api/ComplaintAndSuggestion/del"
        }
    },
    building: {
      url: {
        insert: '/building/insert',
        delete: '/building/delete',
        update: '/building/update',
        findAll: '/building/findAll',
        findAllByPropertyId: '/building/findAllByPropertyId',
        checkPropertyBuildingName: '/building/checkPropertyBuildingName'
      }
    },
    logManagement:{
        url:{
            getLogFileList:"/admin/getLogFileListByFileName",
            downloadLog:"/admin/downLoadLogFile"
        }
    }

};

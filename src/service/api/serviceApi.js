/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:44 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2020-04-07 14:53:44
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
        },
        selectUserByPhone: {
            url: "/admin/selectUserByPhone"
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
            checkPropertyName: '/property/checkPropertyName',
            getById: '/property/getById'
        }
    },
    complaintAndSuggestion:{
        url:{
            create:'/api/ComplaintAndSuggestion/create',
            uploadImage:"/api/fileUpload/uploadComplaintAndSuggestionImage",
            queryOwner:"/api/ComplaintAndSuggestion/query",
            delOWner:"/api/ComplaintAndSuggestion/del",
            querySheetByType:"/api/ComplaintAndSuggestion/queryByStateType",
            updateComplaintAndSuggestionSheetTimeLine:"/api/ComplaintAndSuggestionTimeLine/update",
            updateSheetById:"/api/ComplaintAndSuggestion/updateSheetById"
        }
    },
    building: {
        url: {
            insert: '/building/insert',
            delete: '/building/delete',
            update: '/building/update',
            findAll: '/building/findAll',
            findAllByPropertyId: '/building/findAllByPropertyId',
            getFirstByPropertyId: '/building/getFirstByPropertyId',
            checkPropertyBuildingName: '/building/checkPropertyBuildingName',
            getAllBuildings: '/building/getAllBuildings',
            getAllBuildingByPropertyId: '/building/getAllBuildingByPropertyId',
            getById: '/building/getById'
        }
    },
    house: {
        url: {
            insert: '/house/insert',
            delete: '/house/delete',
            update: '/house/update',
            getById: '/house/getById',
            checkBuildingHouseNumber: '/house/checkBuildingHouseNumber',
            findAllByBuildingId: '/house/findAllByBuildingId',
            getAllHouses: '/house/getAllHouses',
            getUserAllHouses: '/house/getUserAllHouses',
            updateOwner: '/house/updateOwner',
        }
    },
    logManagement:{
        url:{
            getLogFileList:"/admin/getLogFileListByFileName",
            downloadLog:"/admin/downLoadLogFile"
        }
    },
    dbManagement:{
        url:{
            getDbFileList:"/admin/DataBaseBackup/getDbFileList",
            downloadDbFile:"/admin/DataBaseBackup/downLoadDbFile",
            backUpDbFile:"/admin/DataBaseBackup/save"
        }
    },
    feesManagement:{
        url:{
            getOwnerUnPayFeesList: "/houseFeeRecord/getOwnerUnPayFeesList",
            alipayQRCode: "/alipay/payPropertyManagementFee/QRCode",
            alipayPcpay: "/alipay/payPropertyManagementFee/pcPay",
            searchOwnerTimeRangeFeesList: "/houseFeeRecord/searchOwnerTimeRangeFeesList",
            searchUserBuildingFeesList: "/houseFeeRecord/searchUserBuildingFeesList",
            searchBuildingFeesList: "/houseFeeRecord/searchBuildingFeesList",
            searchUserFeesList: "/houseFeeRecord/searchUserFeesList",
            searchHouseFeesList: "/houseFeeRecord/searchHouseFeesList",
            checkHouseFeeClear: "/houseFeeRecord/checkHouseFeeClear",
            findAll: "/houseFeePublishRecord/findAll",
            publish: "/houseFeePublishRecord/publish",
        }
    },
    user: {
        url: {
            selectUserById: "/user/getById",
            sendEmailConfirm: "/user/sendEmailConfirm",
            emailConfirm: "/user/emailConfirm",
        }
    },
    equipmentPurchase: {
        url: {
            getById: "/equipmentPurchase/getById",
            insert: "/equipmentPurchase/insert",
            deleteById: "/equipmentPurchase/deleteById",
            findAll: "/equipmentPurchase/findAll",
            findAllByApplicantId: "/equipmentPurchase/findAllByApplicantId",
            updateStatusPass: "/equipmentPurchase/updateStatusPass",
            updateStatusNotPass: "/equipmentPurchase/updateStatusNotPass",
            updateStatusComplete: "/equipmentPurchase/updateStatusComplete",
        }
    }

};

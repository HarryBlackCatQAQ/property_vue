/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:12 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-15 02:10:19
 */

var api = {
    home:{
        url:"/home",
        name:"系统首页"
    },
    login:{
        url:"/login",
        name:"登录页面"
    },
    page1:{
        url:"page1",
        name:"页面一"
    },
    page2:{
        url:"page2",
        name:"页面二"
    },
    page2_1:{
        url:"page2-1",
        name:"页面2-1"
    },
    roleManagement:{
        url:"/roleManagement",
        name:"角色管理"
    },
    property: {
        url: 'property',
        name: '楼盘管理',
        test: {
          url: 'test',
          name: '楼盘子页面'
        }
    },
    logManagement:{
        url:"/logManagement",
        name:"日志管理",
        logWebsocket:{
            url:"/logManagement",
            name:"后台日志推送"
        }
    },
    complaintAndSuggestion:{
        url:"/complaintAndSuggestion",
        name:"投诉和建议",
        createSheet:{
            url:"/complaintAndSuggestion/createSheet",
            name:"投诉和建议单申请"
        }
    },
    page403:{
        url:"/page403",
        name:"403页面"
    }
}

export default {
    getHome(){
        return api.home.url;
    },
    getHomeName(){
        return api.home.name;
    },
    getLogin(){
        return api.login.url;
    },
    getLoginName(){
        return api.login.name;
    },
    getPage1(){
        return api.page1.url;
    },
    getPage1Name(){
        return api.page1.name;
    },
    getPage1CompleteUrl(){
        return api.home.url + "/" + api.page1.url;
    },
    getPage2(){
        return api.page2.url;
    },
    getPage2Name(){
        return api.page2.name;
    },
    getPage2CompleteUrl(){
        return api.home.url + "/" + api.page2.url;
    },
    getPage2_1(){
        return api.page2_1.url;
    },
    getPage2_1Name(){
        return api.page2_1.name;
    },
    getPage2_1CompleteUrl(){
        return api.home.url + "/" + api.page2.url + "/" + api.page2_1.url;
    },
    roleManagement:{
        getRoleManagementName(){
            return api.roleManagement.name;
        },
        getRoleManagement(){
            return api.roleManagement.url;
        }
    },
    property: {
      url: '',
      getPropertyUrl() {
        return api.property.url
      },
      getPropertyName() {
        return api.property.name
      },
      getPropertyCompleteUrl() {
        return api.home.url + '/' + api.property.url
      },
      test: {
        getTestUrl() {
          return api.property.test.url
        },
        getTestName() {
          return api.property.test.name
        },
        getTestCompleteUrl() {
          return url.concat(api.home.url,'/',api.property.url,'/',api.property.test.url)
        }
      }
    },
    logManagement:{
        getLogManagement(){
            return api.logManagement.url;
        },
        getLogManagementName(){
            return api.logManagement.name;
        },
        getLogWebsocket(){
            return api.logManagement.logWebsocket.url;
        },
        getLogWebsocketName(){
            return api.logManagement.logWebsocket.name;
        }
    },
    complaintAndSuggestion:{
        getComplaintAndSuggestion(){
            return api.complaintAndSuggestion.url;
        },
        getComplaintAndSuggestionName(){
            return api.complaintAndSuggestion.name;
        },
        getCreateSheet(){
            return api.complaintAndSuggestion.createSheet.url;
        },
        getCreateSheetName(){
            return api.complaintAndSuggestion.createSheet.name;
        }
    },
    getPage403(){
        return api.page403.url;
    }
}
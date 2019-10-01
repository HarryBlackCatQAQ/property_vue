/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:12 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 18:53:51
 */

var api = {
    home:"/home",
    login:"/login",
    page1:"page1",
    page2:"page2",
}

export default {
    getHome(){
        return api.home;
    },
    getLogin(){
        return api.login;
    },
    getPage1(){
        return api.page1;
    },
    getPage1CompleteUrl(){
        return api.home + "/" + api.page1;
    },
    getPage2(){
        return api.page2;
    },
    getPage2CompleteUrl(){
        return api.home + "/" + api.page2;
    }

}
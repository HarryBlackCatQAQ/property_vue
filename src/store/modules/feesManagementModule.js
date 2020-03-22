/*
 * @Author: Harry 
 * @Date: 2019-10-25 18:05:28 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-29 15:25:37
 */

export default {
    namespaced:true,
    state: {
        showAliPayDialog:false,
        aliPayImageUrl:"",
        feesInfo:{},
        showFessInfoDialog:false,
    },
    getters:{
        getShowAliPayDialog(state){
            return state.showAliPayDialog;
        },
        getAliPayImageUrl(state){
            return state.aliPayImageUrl;
        },
        getFessInfo(state){
            return state.feesInfo;
        },
        getShowFessInfoDialog(state){
            return state.showFessInfoDialog;
        }
    },
    mutations: {
        changeShowAliPayDialog(state){
            state.showAliPayDialog = !state.showAliPayDialog;
        },
        setAliPayImageUrl(state,val){
            state.aliPayImageUrl = val;
        },
        setFessInfo(state,val){
            state.feesInfo = val;
        },
        changeShowFessInfoDialog(state){
            state.showFessInfoDialog = !state.showFessInfoDialog;
        }
    },
    actions: {
  
    }
 }
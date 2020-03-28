/*
 * @Author: Harry 
 * @Date: 2019-10-15 16:50:16 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2020-03-28 15:57:41
 */

export default {
    namespaced:true,
    state: {
        isOwnerSheetDetails:false,
        ownerSheetData:{},
        feedBackUpdate:false,
    },
    getters:{
        getIsOwnerSheetDetails(state){
            return state.isOwnerSheetDetails;
        },
        getOwnerSheetData(state){
            return state.ownerSheetData;
        },
        getFeedBackUpdate(state){
            return state.feedBackUpdate;
        }
    },
    mutations: {
        changeIsOwnerSheetDetails(state){
            state.isOwnerSheetDetails = !state.isOwnerSheetDetails;
        },
        setIsOwnerSheetDetails(state,val){
            state.isOwnerSheetDetails = val;
        },
        setOwnerSheetData(state,val){
            state.ownerSheetData = val;
        },
        setFeedBackUpdate(state,val){
            state.feedBackUpdate = val;
        }
    },
    actions: {
  
    }
 }
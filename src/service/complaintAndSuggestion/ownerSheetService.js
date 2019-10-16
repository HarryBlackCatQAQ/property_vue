/*
 * @Author: Harry 
 * @Date: 2019-10-15 13:24:40 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-15 16:42:04
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'

var that = _this._this;

 export default {
    async query(pageNum,size){
        let res;

        let userId = that.$store.getters['user/getId'];
        // console.log(userId);
        // console.log(pageNum);
        // console.log(size);

        await that.$get(api.complaintAndSuggestion.url.queryOwner,{
            userId:userId,
            pageNum:pageNum,
            size:size
        })
        .then(response => {
            // console.log(response)
            res = changTime(response);

        })

        return res;
    }
 }


 function changTime(response){
    for(let i = 0;i < response.data.list.length;i++){
        response.data.list[i].submitTime = subTime(response.data.list[i].submitTime);
        response.data.list[i].processingTime = subTime(response.data.list[i].processingTime);
        for(let j = 0;j < response.data.list[i].timelineList.length;j++){
            response.data.list[i].timelineList[j].processingTime = subTime(response.data.list[i].timelineList[j].processingTime);
        }
    }

    return response;
 }

 function subTime(str){
     let tIdx = str.indexOf("T");
     let dianIndx = str.indexOf(".",tIdx);

     let res = str.substring(0,tIdx) + " " + str.substring(tIdx + 1,dianIndx);
     return res;
 }
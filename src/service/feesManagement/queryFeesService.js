/*
 * @Author: Harry 
 * @Date: 2019-10-29 14:47:19 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-29 15:40:13
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'

var that = _this._this;

export default {
    async getAllPayFeesList(pageNum,size){
        let userId = that.$store.getters['user/getId'];

        let res;

        await that.$get(api.feesManagement.url.getAllPayFeesList,{
            userId:userId,
            pageNum:pageNum,
            pageSize:size
        })
        .then(response => {
            response = addShowData(response);
            res = response;
            // console.log(response)
        })

        return res;
    },
    async getPayFeesListByPayState(pageNum,size,state){
        let userId = that.$store.getters['user/getId'];

        let res;

        await that.$get(api.feesManagement.url.getPayFeesListByPayState,{
            userId:userId,
            pageNum:pageNum,
            pageSize:size,
            payState:state,
        })
        .then(response => {
            response = addShowData(response);
            res = response;

        })

        return res;
    },
}

function addShowData(response){
    let list = [];

    for(let i = 0;i < response.data.numberOfElements;i++){
        let item = response.data.content[i];
        list.push(model(
            item.year + "-" + item.month,
            item.house.building.property.location + item.house.building.address + item.house.number,
            item.isPaid ? "已支付" : "未支付",
            item.outTradeNo
        ))
    }

    response.data.list = list;

    return response;
}

function model(paymentDate,paymentInfo,paymentState,outTradeNo){

    return{

     /**
     * 缴费日期
     */
    paymentDate:paymentDate,

    /**
     * 缴费信息
     */
    paymentInfo:paymentInfo, 

    /**
     * 缴费状态
     */
    paymentState:paymentState, 

    /**
     * 缴费编号
     */
    outTradeNo:outTradeNo,
    }
 }
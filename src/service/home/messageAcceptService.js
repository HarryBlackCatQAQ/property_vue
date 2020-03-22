/*
 * @Author: Harry 
 * @Date: 2019-10-29 15:56:15 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-30 13:50:16
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'

import SockJS from "sockjs-client";
import Stomp from "stompjs";

var that = _this._this;

export default {
    openSocket() {
        console.log("openSocket")

        var socket = new SockJS("http://127.0.0.1:8519/endpointHarry"); //连接SockJS的endpoint名称为"endpointHarry"
        this.stompClient = Stomp.over(socket); //使用STMOP子协议的WebSocket客户端

        let _stompClient = this.stompClient;

        this.stompClient.connect({}, function (frame) {
            //连接WebSocket服务端
            // console.log("Connected:" + frame);


            _stompClient.subscribe("/topic/publicMessage", function (response) {
                let h = that.$createElement;
                console.log(response)
                that.$notify({
                    title: '标题名称',
                    message: h('i', { style: 'color: teal'}, response.body)
                  });
            });
        });
    },
    closeSocket(){
        this.stompClient.disconnect();
    }
}
/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:30 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-16 12:20:36
 */


<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import util from "@/service/util";
import axios from 'axios'
    // 1、使用qs将axios发送的数据格式转换为form-data格式（在安装axios时，默认就安装了）
import qs from 'qs'
import { error } from 'util';

import SockJS from "sockjs-client"
import Stomp from "stompjs"

import { mapState } from 'vuex'

export default {
  name: "index",
  data() {
    return {
      userName: "",
      password: "",
      res:"",
      ws:"",
      stompClient:""
    };
  },
  methods: {
    haha() {
      return "http://localhost:8519/code/image";
    },
    login() {
      console.log(this.userName + " " + this.password);

      this.$post("/auth/login", {
        username: this.userName,
        password: this.password
      }).then(response => {
        console.log(response);
        localStorage.setItem("token",response.token);
        console.log(localStorage.getItem("token"))
      });
    },
    login2(){
      axios.post(
                "http://localhost:8519/login",
                // 2、将请求数据转换为form-data格式
                qs.stringify({ userName: this.userName, password: this.password }),
                // 3、设置请求头Content-Type
                { headers:{ 'Content-Type':'application/x-www-form-urlencoded' ,
                'Access-Control-Allow-Origin':'*'
                // ,"Access-Control-Allow-Headers":"X-Requested-With",
                // "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
                }},
            ).then(res => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            })
    },
    login3(){
      this.$post("/test/login2",{
        username: this.userName,
        password: this.password
      })
      .then(response =>{
        console.log(response);
        
      })
    },
    login4(){
      this.$get("/tasks")
      .then(response =>{
        console.log(response);
      })
    },
    logint1(){
      this.$get("/test/t1")
      .then(response =>{
        console.log(response);
      })
      .catch(err =>{
        console.log(err);
      })
    },
    logint2(){
      this.$get("/test/t2")
      .then(response =>{
        console.log(response);
      })
      .catch(err =>{
        console.log(err.response.data);
        if(err.response.data.status == 403){
          console.log("你没有权限！");
        }
      })
    },
    logint3(){
      this.$get("/test/t3")
      .then(response =>{
        console.log(response);
      })
      .catch(err =>{
        console.log(err);
      })
    }
    ,logout(){
      this.$get("/logout")
      .then(response =>{
        console.log(response);
      })
      .catch(err =>{
        console.log(err);
      })
    },
    openSocket2(){
      
      var socket = new SockJS('http://127.0.0.1:8519/endpointHarry'); //连接SockJS的endpoint名称为"endpointHarry"
        this.stompClient = Stomp.over(socket);//使用STMOP子协议的WebSocket客户端
        
        let a = this.stompClient
        let that = this;
        this.stompClient.connect({},function(frame){//连接WebSocket服务端     
            console.log('Connected:' + frame);
            //通过stompClient.subscribe订阅/topic/getResponse 目标(destination)发送的消息
            a.subscribe('/topic/getResponse',function(response){
              // console.log(response.body)
              // console.log(that)
              // console.log(r);
              that.res += response.body;
      
                // showResponse(response.body);
            });
        });


      this.$get("/send")
      .then(response => {
        console.log(response)
      })
    },
    closeSocket2(){
      this.stompClient.disconnect();

      this.$get("/close")
      .then(response =>{
        console.log(response)
      })
    }
  },
  created() {
    console.log(util.SHA1("helloworld"));
  },
  computed: mapState({
    isTokenErrorToLogin:state => state.login.isTokenErrorToLogin
  }),
  watch:{
    isTokenErrorToLogin: function(){
      this.$message({
          message: "账号过期请重新登录",
          type: "error"
        });
    }
  }
};
</script>

<style>
/* 修改el-loading字体大小 */
.el-icon-loading,
.el-loading-spinner .el-loading-text {
  font-size: 20px !important
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.aa{
  width: 1500px;
  height: 500px;
  white-space: pre-line;
  text-align: left;
  background-color: black;
  color: aliceblue;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
} */

</style>

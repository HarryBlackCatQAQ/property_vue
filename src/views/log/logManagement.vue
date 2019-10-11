/*
 * @Author: Harry 
 * @Date: 2019-10-11 00:14:06 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-11 01:55:19
 */

<template>
  <div class="logManagement">
    <!-- logManagement -->

    <div class="log-header">
      <div>
        <modelLabel icon="el-icon-s-order" title="日志管理" />
      </div>

      <div class="log-switch">
        <el-switch
          v-model="isSocketOpen"
          inactive-text="查看后台日志"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></el-switch>
      </div>
    </div>

    <el-container class="log-container">
      <el-main class="log-win">
        <div>{{res}}</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import modelLabel from "@/components/public/modelLabel";

import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default {
  name: "logManagement",
  components: {
    modelLabel
  },
  data() {
    return {
      isSocketOpen: false,
      res: ""
    };
  },
  methods: {
    openSocket2() {
      var socket = new SockJS("http://127.0.0.1:8519/endpointHarry"); //连接SockJS的endpoint名称为"endpointHarry"
      this.stompClient = Stomp.over(socket); //使用STMOP子协议的WebSocket客户端

      let a = this.stompClient;
      let that = this;
      this.stompClient.connect({}, function(frame) {
        //连接WebSocket服务端
        console.log("Connected:" + frame);
        //通过stompClient.subscribe订阅/topic/getResponse 目标(destination)发送的消息
        a.subscribe("/topic/getResponse", function(response) {
          // console.log(response.body)
          // console.log(that)
          // console.log(r);
          that.res += response.body;

          // showResponse(response.body);
        });
      });

      this.$get("/send").then(response => {
        console.log(response);
      });

      this.$message({
        message: "日志推送开启!",
        type: "success"
      });
    },
    closeSocket2(isDestroyed) {
      this.stompClient.disconnect();

      this.$get("/close").then(response => {
        console.log(response);
      });

      if (isDestroyed != true) {
        this.$message({
          message: "日志推送关闭!",
          type: "success"
        });
      }
    }
  },
  watch: {
    isSocketOpen: function() {
      if (this.isSocketOpen) {
        this.openSocket2();
      } else {
        this.closeSocket2();
      }
    }
  },
  destroyed() {
    if (this.isSocketOpen) {
      this.closeSocket2(true);
    }
  }
};
</script>


<style scoped>
.logManagement {
  text-align: left;
  line-height: 10px;
}

.log-header div {
  display: inline-block;
}

.log-switch {
  float: right;
}
.log-switch span {
  margin-bottom: 100px !important;
}

.log-container {
  margin-top: 30px;
}

.log-win {
  height: 500px;
  background-color: black;
  color: white;
  border: 1px solid #ddd;
  text-align: left;
  line-height: 50px;
  border-radius: 5px;
  font-size: 13px;
  white-space: pre-wrap;
}
</style>

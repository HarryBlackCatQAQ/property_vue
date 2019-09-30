/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:48:06 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 03:45:30
 */

<template>
  <div class="login-view">
    Login页面
    <el-button @click="changeView('login')">Click Me</el-button>
    <el-card class="login-card" type="flex">
      <transition name="el-zoom-in-center">
        <login-model v-show="loginModel_show" v-on:changeView="changeView" />
      </transition>

      <transition name="el-zoom-in-center">
        <forgetPassword-model v-show="forgetPasswordModel_show" v-on:changeView="changeView" />
      </transition>

      <transition name="el-zoom-in-center">
        <registered-model v-show="registeredModel_show" v-on:changeView="changeView" />
      </transition>

      <!-- <div class="login-model">
        <div class="input-group">
          <el-row :gutter="20" type="flex" justify="center">
            <el-col :span="2">
              <i class="el-icon-user icon"></i>
            </el-col>
            <el-col :span="22">
              <el-input placeholder="账号" v-model="username" clearable></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="2">
              <i class="el-icon-lock icon"></i>
            </el-col>
            <el-col :span="22">
              <el-input placeholder="密码" type="password" v-model="password" clearable></el-input>
            </el-col>
          </el-row>
        </div>

        <div class="remember-me">
          <el-row type="flex">
            <el-col :span="4" class="remember-me-select">
              <el-checkbox v-model="rememberMe">记住我</el-checkbox>
            </el-col>

            <el-col :span="8" class="remember-link">
              <el-link type="primary">忘记密码</el-link>
            </el-col>
            <el-col :span="8">
              <el-link type="primary">立即注册</el-link>
            </el-col>
          </el-row>
        </div>

        <div class="button-group">
          <el-row type="flex">
            <el-col :span="8">
              <el-button class="login-button" type="primary" @click="login">登录</el-button>
            </el-col>
          </el-row>
        </div>
      </div>-->
    </el-card>
  </div>
</template>

<script>
import loginModel from "@/components/login/loginModel";
import forgetPasswordModel from "@/components/login/forgetPasswordModel";
import registeredModel from "@/components/login/registeredModel";
import util from "@/service/util";

export default {
  name: "login",
  components: {
    loginModel,
    forgetPasswordModel,
    registeredModel
  },
  data() {
    return {
      loginModel_show: true,
      forgetPasswordModel_show: false,
      registeredModel_show: false,
      changTime: 200
    };
  },
  methods: {
    changeView(val) {
      if (val == "registered") {
        this.loginModel_show = false;
        this.forgetPasswordModel_show = false;

        util.sleep(this.changTime).then(() => {
          this.registeredModel_show = true;
        });
      } else if (val == "forgetPassword") {
        this.loginModel_show = false;
        this.registeredModel_show = false;

        util.sleep(this.changTime).then(() => {
          this.forgetPasswordModel_show = true;
        });
      } else {
        this.forgetPasswordModel_show = false;
        this.registeredModel_show = false;

        util.sleep(this.changTime).then(() => {
          this.loginModel_show = true;
        });
      }
    }
  }
};
</script>


<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.login-card {
  width: 350px;
  height: 500px;
  margin: 5% auto;
}
</style>

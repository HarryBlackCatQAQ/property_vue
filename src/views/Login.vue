/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:48:06 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-18 22:06:11
 */

<template>
  <div class="login-view">
    Login页面
    <el-button @click="changeView('login')">Click Me</el-button>

    <!-- 登录卡片-->
    <el-card class="login-card" type="flex">

      <!-- 登录组件-->
      <transition name="el-zoom-in-center">
        <login-model v-show="loginModel_show" v-on:changeView="changeView" ref="loginModel"/>
      </transition>
      
      <!-- 忘记密码组件-->
      <transition name="el-zoom-in-center">
        <forgetPassword-model v-show="forgetPasswordModel_show" v-on:changeView="changeView" ref="forgetPasswordModel"/>
      </transition>
      
      <!-- 注册组件-->
      <transition name="el-zoom-in-center">
        <registered-model v-show="registeredModel_show" v-on:changeView="changeView" ref="registeredModel"/>
      </transition>
      
    </el-card>
  </div>
</template>

<script>
import loginModel from "@/components/login/loginModel";
import forgetPasswordModel from "@/components/login/forgetPasswordModel";
import registeredModel from "@/components/login/registeredModel";
import util from "@/service/util";
import { mapState } from 'vuex'

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
  mounted: function () {
    this.$store.commit("login/IS_LOGIN_MODEL_SHOW",true)
  },
  computed: mapState({
    isLoginModelShow: state => state.login.isLoginModelShow,
    isForgetPasswordModelShow: state => state.login.isForgetPasswordModelShow,
    isRegisteredModelShow: state => state.login.isRegisteredModelShow,
  }),
  created() {
    let _this = this
    document.onkeydown = function(e) {
      let key = window.event.keyCode
      if (key === 13) {
        if (_this.isLoginModelShow === true) {
          console.log('isLoginModelShow')
          _this.$refs.loginModel.login()
        } else if (_this.isRegisteredModelShow === true) {
          console.log('isRegisteredModelShow')
          _this.$refs.registeredModel.submitForm('ruleForm')
        }
      }
    };
  },
  methods: {
    changeView(val) {
      if (val === "registered") {
        this.loginModel_show = false;
        this.forgetPasswordModel_show = false;
        this.$store.commit('login/IS_LOGIN_MODEL_SHOW',false)
        this.$store.commit('login/IS_FORGET_PASSWORD_MODEL_SHOW',true)

        util.sleep(this.changTime).then(() => {
          this.registeredModel_show = true;
          this.$store.commit('login/IS_REGISTERED_MODEL_SHOW',true)
        });
      } else if (val === "forgetPassword") {
        this.loginModel_show = false;
        this.registeredModel_show = false;
        this.$store.commit('login/IS_LOGIN_MODEL_SHOW',false)
        this.$store.commit('login/IS_REGISTERED_MODEL_SHOW',false)

        util.sleep(this.changTime).then(() => {
          this.forgetPasswordModel_show = true;
          this.$store.commit('login/IS_FORGET_PASSWORD_MODEL_SHOW',true)
        });
      } else if (val === "login"){
        this.forgetPasswordModel_show = false;
        this.registeredModel_show = false;
        this.$store.commit('login/IS_FORGET_PASSWORD_MODEL_SHOW',false)
        this.$store.commit('login/IS_REGISTERED_MODEL_SHOW',false)

        util.sleep(this.changTime).then(() => {
          this.loginModel_show = true;
          this.$store.commit('login/IS_LOGIN_MODEL_SHOW',true)
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

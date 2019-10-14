/*
 * @Author: Harry 
 * @Date: 2019-10-15 02:29:42 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-15 02:31:04
 */

<template>
  <div class="error-page">
      <div class="error-code">4<span>0</span>3</div>
      <div class="error-desc">不好意思 你没有权限访问该页面!QAQ</div>
      <div class="error-handle">
          <router-link to="/">
            <el-button type="primary" size="large">返回登录界面</el-button>
          </router-link>
          <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name:"page403",
  methods: {
      goBack(){
          this.$router.go(-2);
      }
  }
}
</script>


<style scoped>
    .error-page{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: white;
        box-sizing: border-box;
        margin-top: 10%;
    }
    .error-code{
        line-height: 1;
        font-size: 250px;
        font-weight: bolder;
        color: #f02d2d;
    }
    .error-code span{
        color: #00a854;
    }
    .error-desc{
        font-size: 30px;
        color: #777;
    }
    .error-handle{
        margin-top: 30px;
        padding-bottom: 200px;
    }
    .error-btn{
        margin-left: 100px;
    }
</style>

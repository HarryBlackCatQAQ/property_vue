/*
 * @Author: Harry 
 * @Date: 2019-10-01 16:24:28 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-02 14:45:18
 */

<template>
  <div class="menu">
    <el-row class="tac" type="flex">
      <el-col class="tac2" :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :style="{'height': (this.len) + 'px'}"
          :collapse="this.$store.getters['home/getIsAsideMenuOpen']"
        >
           <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
             <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> 
          </el-submenu>  -->


          <el-menu-item index="1" @click="menuClick(1)" >
            <i class="el-icon-document"></i>
            <span slot="title">page1</span>
          </el-menu-item>
          <el-menu-item index="2" @click="menuClick(2)">
            <i class="el-icon-document"></i>
            <span slot="title">page2</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import util from "@/service/util";
import routerApi from "@/service/api/routerApi";

export default {
  name: "aside-menu",
  data() {
    return {
      len: window.innerHeight,
      screenHeight: window.innerHeight
    };
  },
  methods: {
      menuClick(idx){
          if(idx == 1){
              this.$router.push(routerApi.getPage1CompleteUrl());
          }
          else if(idx == 2){
              this.$router.push(routerApi.getPage2CompleteUrl());
          }
      }
  },
  created() {
    const that = this;
    window.onresize = () => {
      return (() => {
        this.screenHeight = util.getWinHeight();
      })();
    };
  },
  watch: {
    screenHeight(val) {
    //   console.log(val);
      this.len = val;
    }
  }
};
</script>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }

</style>

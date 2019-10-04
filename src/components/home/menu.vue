/*
 * @Author: Harry 
 * @Date: 2019-10-01 16:24:28 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-04 15:14:49
 */

<template>
  <div class="menu">
    <el-row class="tac" type="flex">
      <el-col class="tac2" :span="24">
        <el-menu
          default-active="0"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :style="{'height': (this.$store.getters['home/getScreenHeight']) + 'px'}"
          :collapse="this.$store.getters['home/getIsAsideMenuOpen']"
        >


         <template v-for="(item,index) in this.list" >
           <el-menu-item :index="index.toString()" :key="index" @click="menuClick(item.url)" >
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
         </template>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import util from "@/service/util";
import routerApi from "@/service/api/routerApi";
import menuList from '@/service/home/menuList'

export default {
  name: "aside-menu",
  data() {
    return {
      list:[]
    };
  },
  methods: {
      menuClick(url){
          this.$router.push(url);
      }
  },
  created(){
    this.list = menuList.getList();
  }
};
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
}

</style>

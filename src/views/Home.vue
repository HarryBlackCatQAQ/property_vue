/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:48:10 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-04 02:35:19
 */

<template>
  <div class="home-view" :style="{'height': (this.$store.getters['home/getScreenHeight']) + 'px'}">
    <el-container>
      <el-header>
        <headNav/>
      </el-header>

      <el-container  :style="{'height': (this.$store.getters['home/getScreenHeight']) + 'px'}">
        <!-- <el-aside :style="{'height': (this.clen) + 'px'}"> -->
          <asideMenu/>
        <!-- </el-aside> -->

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script>
import asideMenu from '@/components/home/menu'
import headNav from '@/components/home/head'
import util from "@/service/util";

export default {
  name: "home",
  components: {
    asideMenu,
    headNav
  },
  data(){
    return{
    }
  },
  methods:{
    
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        this.$store.commit('home/setScreenHeight');
      })();
    };
  }
};
</script>


<style>
.el-header,
.el-footer {
  background-color: #444444;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
  /* text-align: center; */
  /* height:1000px; */
  line-height: 200px;
  overflow-x: hidden !important;
}

.el-main {
  /* #e9eef3 */
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

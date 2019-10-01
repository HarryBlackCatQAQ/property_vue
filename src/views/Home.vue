/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:48:10 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 18:24:16
 */

<template>
  <div class="home-view">
    主页
    <el-container>
      <el-header>
        <headNav/>
      </el-header>

      <el-container  :style="{'height': (this.clen) + 'px'}">
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
      clen:util.getWinHeight(),
      screenHeight:util.getWinHeight(),
      isCollapse:false
    }
  },
  methods:{
    handleOpen() {
        // console.log(this.$store.getters.getIsAsideMenuOpen)
        this.$store.commit('changeIsAsideMenuOpen');
        // console.log(this.$store.getters.getIsAsideMenuOpen)
      }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        this.screenHeight = util.getWinHeight();
        // console.log(this.screenHeight)
      })();
    };
  },
  watch: {
    screenHeight(val) {
      // console.log(val);
      this.clen = val;
    }
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

/*
 * @Author: Harry 
 * @Date: 2019-10-01 16:26:22 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-02 14:45:29
 */

<template>
  <div class="head-nav">
    <el-row>
      <el-col :span="24">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#444444"
            text-color="#fff"
            active-text-color="#ffd04b"
            type="flex"
            >
      <el-menu-item @click="changeMenu" class="item-left" index="0">
          <i v-if="this.$store.getters['home/getIsAsideMenuOpen']" class="el-icon-s-unfold"></i>
          <i v-else  class="el-icon-s-fold"></i>
      </el-menu-item>

      <el-menu-item class="item-right" index="1">1</el-menu-item>
      <el-menu-item class="item-right" index="3" disabled>2</el-menu-item>
      <el-menu-item class="item-right" index="4">
        <a href="https://www.ele.me" target="_blank">3</a>
      </el-menu-item>
    </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "head-nav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    changeMenu(){
        // console.log(this.$store.getters['home/getIsAsideMenuOpen'])
        this.$store.commit('home/changeIsAsideMenuOpen');
        // console.log(this.$store.getters['home/getIsAsideMenuOpen'])
    }
  }
};
</script>


<style>
.item-right{
    float: right !important;
}

.item-left{
    float: left !important;
}

/* .el-menu-demo{
    background-color:  #444444 !important;
}

.el-menu-demo li{
    background-color:  #444444 !important;
}

.el-menu-demo div{
    background-color:  #444444 !important;
} */
</style>

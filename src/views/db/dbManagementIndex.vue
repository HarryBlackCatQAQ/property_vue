/*
 * @Author: Harry 
 * @Date: 2019-10-09 19:33:10 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2020-04-07 02:44:14
 */


<template>
  <div class="dbManagementIndex">
      <!-- dbManagementIndex -->
    <router-view/>
  </div>
</template>

<script>
export default {
    name :"dbManagementIndex"
}
</script>


<style scoped>
.container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 0px;
  margin-top: 30px;
}

.el-slider__runway{
  margin: 6px !important;
}
</style>

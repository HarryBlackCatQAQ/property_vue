/*
 * @Author: Hovees 
 * @Date: 2019-10-25 09:28:40 
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-25 09:29:10
 */

<template>
  <div class="house-index">
    <!-- 房屋数据控制模块 -->
    <house-control-model/>

  </div>  
</template>

<script>
  import houseControlModel from "../../components/house/houseControlModel";
  export default {
    name: "houseIndex",
    components: {
      houseControlModel
    }
  }
</script>

<style scoped>

</style>
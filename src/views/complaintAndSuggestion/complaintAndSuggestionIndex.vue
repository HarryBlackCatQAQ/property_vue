/*
 * @Author: Harry 
 * @Date: 2019-10-13 15:50:44 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-14 18:35:13
 */


<template>
  <div class="complaintAndSuggestionIndex">
    <!-- complaintAndSuggestionIndex -->
    <router-view/>
  </div>
</template>

<script>
export default {
    name :"complaintAndSuggestionIndex"
}
</script>


<style>
.container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 0px;
  margin-top: 30px;
}

.el-upload-dragger {
    width: 100%;
}

.el-upload{
  width: 100%;
}

.el-upload-list{
    margin-top: 30px !important;
}
</style>

/*
 * @Author: Harry 
 * @Date: 2019-10-13 15:50:44 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-16 16:26:48
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
.complaintAndSuggestionIndex{
  height: 1200px;
}

.container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 0px;
  margin-top: 30px;
  max-height: 1100px;
  /* height: 100%; */
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

.el-form-item__content{
  margin-left: 0!important;
}
</style>

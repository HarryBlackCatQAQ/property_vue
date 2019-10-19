/*
 * @Author: Harry 
 * @Date: 2019-10-13 15:50:44 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-19 18:32:02
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

.ownerSheet .container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 0px;
  margin-top: 30px;
  /* max-height: 1100px; */
  /* height: 100%; */
}

.ownerSheet .el-table__body-wrapper{
  max-height:100% !important;
}

.ownerSheet .el-table{
  max-height:100% !important;
}

.creatSheet .container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* line-height: 0px; */
  margin-top: 30px;
  /* max-height: 1100px; */
  /* height: 100%; */
}

.el-upload-dragger {
    width: 100%;
}

.upload-form-item{
  
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

.creatSheet li{
  width: 30%;
  float: left ;
  margin-left: 10px;
}
</style>

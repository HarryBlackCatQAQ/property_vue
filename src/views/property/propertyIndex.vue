/*
 * @Author: Hovees 
 * @Date: 2019-10-08 14:50:53
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-10 14:53:04
 */

<template>
  <div class="property-index">

    <el-button @click="jump">跳转</el-button>

    <!-- 楼盘数据控制模块 -->
    <property-control-model/>

    <!-- 添加楼盘模态框 -->
    <add-property-dialog/>

    <!-- 删除楼盘模态框 -->
    <delete-property-dialog/>

    <!-- 修改楼盘模态框 -->
    <edit-property-dialog/>
  
  </div>
</template>

<script>
  import propertyControlModel from '../../components/property/propertyControlModel'
  import addPropertyDialog from '../../components/property/addPropertyDialog'
  import deletePropertyDialog from '../../components/property/deletePropertyDialog'
  import editPropertyDialog from '../../components/property/editPropertyDialog'
  export default {
    name: 'propertyIndex',
    components: {
      propertyControlModel,
      addPropertyDialog,
      deletePropertyDialog,
      editPropertyDialog,
    },
    methods: {
      jump() {
        this.$router.push('property/test')
      }
    }
  }
</script>

<style scoped>
  
</style>
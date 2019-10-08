/*
* @Author: Hovees
* @Date: 2019-10-08 14:50:53
* @Last Modified by: Hovees-hwx
* @Last Modified time: 2019-10-08 15:55:40
*/

<template>
  <div>
    <el-table :data="properties">
      <el-table-column prop="id" label="id" min-width="15%"/>
      <el-table-column prop="name" label="楼盘名字" min-width="15%"/>
      <el-table-column prop="location" label="地址" min-width="15%"/>
      <el-table-column prop="uid" label="楼盘编码" min-width="15%"/>
      <el-table-column label="Action"
                       min-width="8%">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-edit" @click="handleEdit(scope.row)" />
          <el-button size="small" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import propertyService from "../../service/propertyService";
  export default {
    name: "propertyShowListModel",
    mounted: function () {
      this.getProperty();
    },
    computed: mapState({
      properties: state => state.property.properties,
      rowCount: state => state.property.rowCount,
    }),
    methods: {
      getProperty() {
        let res = propertyService.getProperty(1, 2)
        res.then(response =>{
          if(response.message === '查询成功') {
            this.$store.commit('property/GET_PROPERTY', response.data)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
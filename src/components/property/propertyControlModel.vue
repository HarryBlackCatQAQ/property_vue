/*
 * @Author: Hovees
 * @Date: 2019-10-08 14:50:53
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-10 15:46:36
 */

<template>
  <div class="property-control-model">
    <el-button @click="clickAdd">添加楼盘</el-button>
    <el-table :data="properties" border>
      <el-table-column prop="id" label="id" min-width="3%" align="center"/>
      <el-table-column prop="name" label="楼盘名字" min-width="15%"/>
      <el-table-column prop="location" label="地址" min-width="15%"/>
      <el-table-column prop="uid" label="楼盘编码" min-width="15%"/>
      <el-table-column label="操作" min-width="8%">
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
  import propertyService from '../../service/propertyService'
  export default {
    name: 'propertyControlModel',
    mounted: function () {
      this.getProperty()
    },
    computed: mapState({
      properties: state => state.property.properties,
      rowCount: state => state.property.rowCount,
    }),
    methods: {
      getProperty() {
        let res = propertyService.getProperty()
      },
      pageChange(pageNum) {
        this.$store.commit('property/SET_PAGE_NUM', pageNum)
        this.getProperty()
      },
      pageSizeChange(pageSize) {
        this.$store.commit('property/SET_PAGE_SIZE', pageSize)
        this.getProperty()
      },
      clickAdd() {
        this.$store.commit('property/ADD_PROPERTY_DIALOG', true)
      },
      handleEdit(property) {
        this.$store.commit('property/RECORD_PROPERTY', Object.assign({}, property))
        this.$store.commit('property/EDIT_PROPERTY_DIALOG', true)
      },
      handleDelete(property) {
        this.$store.commit('property/RECORD_PROPERTY', Object.assign({}, property))
        this.$store.commit('property/DELETE_PROPERTY_DIALOG', true)
      }
    }
  }
</script>

<style scoped>

</style>
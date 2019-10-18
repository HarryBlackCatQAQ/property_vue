/*
 * @Author: Hovees
 * @Date: 2019-10-08 14:50:53
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-18 13:24:42
 */

<template>
  <div class="property-control-model">
    <el-button @click="jump">跳转</el-button>
    <el-button @click="clickAdd">添加楼盘</el-button>
    <el-table :data="properties" border>
      <el-table-column label="序号" min-width="3%" align="center">
        <template slot-scope="scope">
          {{(pageNum - 1) * pageSize + scope.$index + 1}}
        </template>
      </el-table-column>
      <el-table-column label="楼盘名字" min-width="15%">
        <template slot-scope="scope">
          <el-link :underline=false @click="handleView(scope.row)">
            {{scope.row.name}}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="location" label="地址" min-width="15%"/>
      <el-table-column prop="uid" label="楼盘编码" min-width="15%"/>
      <el-table-column label="操作" min-width="8%">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-view" @click="handleView(scope.row)" />
          <el-button size="small" icon="el-icon-edit" @click="handleEdit(scope.row)" />
          <el-button size="small" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)"/>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.rowCount"
        :page-size="this.pageSize"
        :current-page="this.pageNum"
        @size-change="pageSizeChange"
        @current-change="pageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import routerApi from '@/service/api/routerApi'
  import propertyService from '../../service/property/propertyService'
  export default {
    name: 'propertyControlModel',
    mounted: function () {
      this.getProperty()
    },
    computed: mapState({
      properties: state => state.property.properties,
      rowCount: state => state.property.rowCount,
      pageNum: state => state.property.pageNum,
      pageSize: state => state.property.pageSize
    }),
    methods: {
      jump() {
        this.$router.push(routerApi.property.test.getTestCompleteUrl())
      },
      getProperty() {
        propertyService.getProperty()
        .catch(error => {
          console.log(error)
          this.$message.error('获取数据失败')
        })
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
      },
      handleView(property) {
        this.$store.commit('property/SET_PROPERTY_ID', property.id)
        this.$store.commit('property/SET_PROPERTY_NAME', property.name)
        this.$store.commit('building/SET_PAGE_NUM', 1)
        this.$store.commit('building/SET_PAGE_SIZE', 10)
        this.$router.push(routerApi.property.building.getBuildingCompleteUrl())
      }
    }
  }
</script>

<style scoped>

</style>
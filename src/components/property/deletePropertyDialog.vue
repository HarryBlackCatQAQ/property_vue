/*
 * @Author: Hovees 
 * @Date: 2019-10-10 13:58:08 
 * @Last Modified by: Hovees-hwx
 * @Last Modified time: 2019-10-10 16:20:58
 */
 
<template>
  <div class="delete-property-dialog">
    <el-dialog width="500px" :visible="show"
      center
      @close="clickClose"
      title="提示">
      <el-form v-loading="loading">
        <el-form-item label-width="4%">
          <h3>确认删除该楼盘吗？</h3>
        </el-form-item>
        <el-form-item label="楼盘名称:" label-width="20%">
          <b>{{recordProperty.name}}</b>
        </el-form-item>
        <el-form-item label="楼盘地址:" label-width="20%">
          <b>{{recordProperty.location}}</b>
        </el-form-item>
        <el-form-item label="楼盘编码:" label-width="20%">
          <b>{{recordProperty.uid}}</b>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="clickClose">取消</el-button>
        <el-button type="danger" @click="clickDel">删除</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import propertyService from '../../service/propertyService'
import {mapState} from "vuex";
export default {
  name: 'deletePropertyDialog',
  computed: mapState({
    show: state => state.property.deletePropertyDialog,
    loading: state => state.property.loading,
    recordProperty: state => state.property.recordProperty
  }),
  methods: {
    clickClose() {
      this.$store.commit('property/DELETE_PROPERTY_DIALOG', false)
    },
    clickDel() {
      // let res = propertyService.delete()
    }
  }
}
</script>

<style>

</style>
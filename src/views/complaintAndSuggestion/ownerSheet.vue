/*
 * @Author: Harry 
 * @Date: 2019-10-15 13:01:19 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-16 00:58:25
 */

<template>
  <div class="ownerSheet">
    <div>
      <modelLabel icon="el-icon-edit-outline" title="我的申请" />
    </div>

    <div class="table">
      <div class="container">
        <!--列表-->
        <div v-if="!this.isOwnerSheetDetails">
            <el-table
            :data="tableData"
            highlight-current-row
            max-height="700"
            v-loading="listLoading"
            @selection-change="selsChange"
            style="width: 100%;"
            :default-sort = "{prop: 'submitTime', order: 'descending'}"
            >
            <el-table-column prop="submitTime" label="提交日期" sortable></el-table-column>
            <el-table-column prop="title" label="主题"></el-table-column>
            <el-table-column prop="sheetType" label="类型" sortable></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>

            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
            </el-table>

            <div class="pagination">
            <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper"
                :page-size="pageSize"
                :current-page="pageNo"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :total="total"
            ></el-pagination>
            </div>
        </div>

        <div v-else>
            <ownerSheetDetails/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modelLabel from "@/components/public/modelLabel";
import ownerSheetService from "@/service/complaintAndSuggestion/ownerSheetService";
import ownerSheetDetails from "@/components/complaintAndSuggestion/ownerSheetDetails";
import { mapState } from "vuex";

export default {
  name: "ownerSheet",
  components: {
    modelLabel,
    ownerSheetDetails
  },
  data() {
    return {
      tableData: [],
      total: 0,
      pageSize: 10,
      pageNo: 1,
      listLoading: true,
      sels: [], //列表选中列
      content: "",
      content_type: "全部",
      pageType: 0,
      preContent: ""
    };
  },
  methods: {
    handleEdit(index, row) {
    //   console.log(index);
    //   console.log(row);
     
    //  console.log(this.isOwnerSheetDetails)
      this.$store.commit("complaintAndSuggestion/changeIsOwnerSheetDetails")
      this.$store.commit("complaintAndSuggestion/setOwnerSheetData",row);
    //   console.log(this.isOwnerSheetDetails)
    },
    //点击页码事件
    handleCurrentChange(pageNo) {
      this.pageNo = pageNo;
      this.getList(pageNo, this.pageSize);
    },
    //改变分页大小事件
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getList(this.pageNo, pageSize);
    },
    selsChange(sels) {
      this.sels = sels;
    },
    getList(pageNo,pageSize){
        this.listLoading = true;
        let res = ownerSheetService.query(pageNo,pageSize);

        res.then(response =>{
            // console.log(response)

            this.tableData = response.data.list;
            this.total = response.data.total;
            this.listLoading = false;
        })
    },
  },
  created() {
    this.getList(this.pageNo,this.pageSize);
  },
  computed: mapState({
    isOwnerSheetDetails: state => state.complaintAndSuggestion.isOwnerSheetDetails
  }),
};
</script>


<style>
</style>

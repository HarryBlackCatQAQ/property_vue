/*
 * @Author: Harry 
 * @Date: 2020-03-28 12:17:14 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2020-03-28 16:01:09
 */

<template>
  <div class="auditSheet ownerSheet">
    <div>
      <modelLabel icon="el-icon-edit-outline" title="我的申请" />
    </div>

    <div class="auditSheet-table">
      <div class="container">
        <div class="handle-box" v-if="!this.isOwnerSheetDetails">
            <el-select class="search-select" v-model="content_type" placeholder="请选择查询类型">
                <el-option label="全部" value="all"></el-option>
                <el-option label="待处理" value="待处理"></el-option>
                <el-option label="正在处理" value="正在处理"></el-option>
                <el-option label="已完成" value="已完成"></el-option>
            </el-select>
          </div>


        <!--列表-->
        <div class="auditSheet-judge" v-if="!this.isOwnerSheetDetails">
          <el-table
            :data="tableData"
            highlight-current-row
            max-height="700"
            v-loading="listLoading"
            @selection-change="selsChange"
            style="width: 100%;"
            :default-sort="{prop: 'submitTimeShow', order: 'descending'}"
          >
            <el-table-column prop="submitTimeShow" label="提交日期" sortable></el-table-column>
            <el-table-column prop="title" label="主题"></el-table-column>

            <el-table-column
              prop="sheetType"
              label="类型"
              :filters="this.sheetTypeFilter"
              :filter-method="sheetTypeFilterTag"
            >
              <template slot-scope="scope">
                <el-tag
                  :type="sheetTypeTagType(scope.row.sheetType)"
                  disable-transitions
                >{{scope.row.sheetType}}</el-tag>
              </template>
            </el-table-column>

            <el-table-column
              prop="state"
              label="状态"
              :filters="this.stateFilter"
              :filter-method="stateFilterTag"
            >
              <template slot-scope="scope">
                <el-tag
                  :type="stateTagType(scope.row.state)"
                  disable-transitions
                >{{scope.row.state}}</el-tag>
              </template>
            </el-table-column>

            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)"
                >查看</el-button>
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

        <div class="ownerSheet-judge" v-else>
          <ownerSheetDetails />
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
import { error } from 'util';

export default {
  name: "auiditSheet",
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
      prePageNo:1,
      prePageSize:10,
      listLoading: true,
      sels: [], //列表选中列
      content: "",
      content_type: "全部",
      pageType: 0,
      preContent: "",
      stateFilter: [
        { text: "待处理", value: "待处理" },
        { text: "正在处理", value: "正在处理" },
        { text: "已完成", value: "已完成" },
        { text: "已取消", value: "已取消" }
      ],
      sheetTypeFilter:[
        { text: "投诉", value: "投诉" },
        { text: "建议", value: "建议" }
      ]
    };
  },
  methods: {
    handleDel(index,row){
      // console.log(index);
      // console.log(row);

      let res = ownerSheetService.del(row);

      res.then(response =>{
        if(response.flag){
          this.$message.success("删除成功!")
          this.getList(this.prePageNo,this.prePageSize);
        }
        else{
          this.myError();
        }
      }).catch(error =>{
        console.log(error);
        // this.myError();
      })
    },
    myError(){
      this.$message("系统发生了错误，不好意思！QAQ请稍后再试!");
    },
    setPrePage(pageNo,size){
      this.prePageNo = pageNo;
      this.prePageSize = size;
    },
    handleEdit(index, row) {
      //   console.log(index);
      //   console.log(row);

      //  console.log(this.isOwnerSheetDetails)
      this.$store.commit("complaintAndSuggestion/changeIsOwnerSheetDetails");
      this.$store.commit("complaintAndSuggestion/setOwnerSheetData", row);
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
    getList(pageNo, pageSize,state) {
      this.setPrePage(pageNo,pageSize);

      this.listLoading = true;
      let res = ownerSheetService.queryByStateType(pageNo, pageSize,state);

      res.then(response => {
        // console.log(response)

        this.tableData = response.data.list;
        this.total = response.data.total;
        this.listLoading = false;
      }).catch(error =>{
        this.$message.error("服务器错误！QAQ，不好意思请再次刷新尝试");
        this.listLoading = false;
      });
    },
    stateTagType(mes) {
      if (mes === "待处理") {
        return "primary";
      } else if (mes === "正在处理") {
        return "warning";
      } else if (mes === "已完成") {
        return "success";
      } else if (mes === "已取消") {
        return "info";
      }
    },
    stateFilterTag(value, row) {
      return row.state === value;
    },
    sheetTypeTagType(mes) {
      if (mes === "投诉") {
        return "danger";
      } else {
        return "success";
      }
    },
    sheetTypeFilterTag(value,row){
      return row.sheetType === value;
    }
  },
  created() {
    this.getList(this.pageNo, this.pageSize,"all");
    this.$store.commit("complaintAndSuggestion/setIsOwnerSheetDetails",false);
    // console.log(this.feedBackUpdate)
  },
  computed: mapState({
    isOwnerSheetDetails: state =>
      state.complaintAndSuggestion.isOwnerSheetDetails,
    feedBackUpdate: state => 
      state.complaintAndSuggestion.feedBackUpdate
  }),
  watch:{
      content_type(val,oldval){
        //   console.log(val);
        //   console.log(oldval);
          this.getList(this.pageNo, this.pageSize,val);
      },
      feedBackUpdate(val,oldval){
          if(val == true){
              this.getList(this.pageNo, this.pageSize,this.content_type);
              this.$store.commit("complaintAndSuggestion/setFeedBackUpdate",false);
          }
      }

  }
};
</script>


<style scoped>
.auditSheet{
  height: 100%;
}

.auditSheet-table{
  height: 100%;
}

.auditSheet-judge{
  height: 100%;
}

.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}

</style>
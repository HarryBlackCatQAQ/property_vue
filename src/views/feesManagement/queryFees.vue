/*
 * @Author: Harry 
 * @Date: 2019-10-25 13:10:37 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-29 15:41:09
 */

<template>
  <div class="queryFees">
    <!-- queryFees -->
    <div>
      <modelLabel icon="el-icon-wallet" title="费用查询" />
    </div>

    <div class="container">
      <div class="handle-box">
        <el-select class="search-select" v-model="content_type" placeholder="请选择查询类型">
          <el-option label="全部" value="全部"></el-option>
          <el-option label="未支付" value="0"></el-option>
          <el-option label="已支付" value="1"></el-option>
        </el-select>
      </div>

      <!--列表-->
      <el-table
        :data="tableData"
        highlight-current-row
        max-height="700"
        v-loading="listLoading"
        style="width: 100%;"
      >
        <!-- @selection-change="selsChange" -->
        <!-- <el-table-column type="selection" width="55"></el-table-column> -->

        <el-table-column prop="paymentDate" label="缴纳日期"></el-table-column>
        <el-table-column prop="paymentInfo" label="详细信息"></el-table-column>
        <el-table-column prop="paymentState" label="缴费状态">
          <template slot-scope="scope">
            <el-tag
              :type="paymentStateTagType(scope.row.paymentState)"
              disable-transitions
            >{{scope.row.paymentState}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleLook(scope.$index, scope.row)" >查看</el-button>
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

    <feesInfoDialog />
  </div>
</template>

<script>
import modelLabel from "@/components/public/modelLabel";
import queryFeesService from "@/service/feesManagement/queryFeesService";
import feesInfoDialog from "@/components/feesManagement/feesInfoDialog";

export default {
  name: "queryFees",
  components: {
    modelLabel,
    feesInfoDialog
  },
  data() {
    return {
      tableData: [],
      total: 0,
      pageSize: 10,
      pageNo: 1,
      prePageNo: 1,
      prePageSize: 10,
      listLoading: false,
      content_type: "全部"
    };
  },
  methods: {
    handleLook(index,row){
      // console.log(row);
      this.$store.commit("feesManagement/setFessInfo",row);
      this.$store.commit("feesManagement/changeShowFessInfoDialog");
    },
    getList(pageNo, pageSize) {
      this.setPrePage(pageNo, pageSize);
      this.openTableLoading();

      let res;
      if(this.content_type === "全部"){
        res = queryFeesService.getAllPayFeesList(pageNo - 1, pageSize);
      }
      else{
        res = queryFeesService.getPayFeesListByPayState(pageNo - 1, pageSize,this.content_type);
      }
      

      res
        .then(response => {
          // console.log(response);

          this.tableData = response.data.list;
          this.total = response.data.totalElements;
          this.closeTableLoading();
        })
        .catch(error => {
          this.$message.error("系统出错，请稍后再试!");
          this.closeTableLoading();
        });
    },
    handleCurrentChange(pageNo) {
      this.pageNo = pageNo;
      this.getList(pageNo, this.pageSize);
    },
    //改变分页大小事件
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getList(this.pageNo, pageSize);
    },
    setPrePage(pageNo, size) {
      this.prePageNo = pageNo;
      this.prePageSize = size;
    },
    paymentStateTagType(mes) {
      if (mes == "未支付") {
        return "danger";
      } else if (mes == "已支付") {
        return "success";
      }
    },
    openTableLoading() {
      this.listLoading = true;
    },
    closeTableLoading() {
      this.listLoading = false;
    },
  },
  created() {
      this.getList(this.pageNo, this.pageSize);
      // console.log(this.content_type);
  },
  watch:{
    content_type(){
      // console.log(this.content_type)
      this.getList(this.pageNo, this.pageSize);
    }
  }
};
</script>


<style scoped>
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

.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}

.search-btn {
  margin-left: 50px;
}

.search-select {
  /* margin-left: 40px; */
  /* width: 110px; */
}

.el-table {
  max-height: 100% !important;
}
</style>

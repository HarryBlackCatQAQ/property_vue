/*
 * @Author: Harry 
 * @Date: 2019-10-29 15:19:06 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-29 15:39:33
 */

<template>
  <div class="feesInfoDialog">
    <!-- feesInfoDialog -->
    <el-dialog title="详细信息" :visible.sync="dialogFormVisible" width="30%">
      <div class="fees-info">
        <span>支 付 编 号: {{this.fees.outTradeNo}}</span>
        <el-divider></el-divider>
        <span>物业费阶段: {{this.fees.paymentDate}}</span>
        <el-divider></el-divider>
        <span>详 细 信 息: {{this.fees.paymentInfo}}</span>
        <el-divider></el-divider>
        <span>
          支 付 状 态: 
          <el-tag
            :type="paymentStateTagType(this.fees.paymentState)"
            disable-transitions
          >{{this.fees.paymentState}}</el-tag>
        </span>
        <el-divider></el-divider>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "feesInfoDialog",
  data() {
    return {
      dialogFormVisible: false,
      fees: ""
    };
  },
  methods: {
    changeVisible() {
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    paymentStateTagType(mes) {
      if (mes == "未支付") {
        return "danger";
      } else if (mes == "已支付") {
        return "success";
      }
    }
  },
  computed: mapState({
    showFessInfoDialog: state => state.feesManagement.showFessInfoDialog,
    feesInfo: state => state.feesManagement.feesInfo
  }),
  watch: {
    showFessInfoDialog: function() {
      this.changeVisible();
      this.fees = this.feesInfo;
    }
  }
};
</script>


<style scoped>
.feesInfoDialog {
  line-height: 0px;
}

.fees-info {
  text-align: left;
}
</style>

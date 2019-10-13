/*
 * @Author: Harry 
 * @Date: 2019-10-13 16:00:35 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-13 18:34:01
 */

<template>
  <div class="creatSheet">
    <div>
      <modelLabel icon="el-icon-edit-outline" title="投诉检验单申请" />
    </div>
    <div class="creatSheet-container">
      <div class="container">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="主题:">
            <el-input v-model="form.title"></el-input>
          </el-form-item>

          <el-form-item label="类型:">
            <el-select v-model="form._type" placeholder="请选择活动区域">
              <el-option label="投诉" value="投诉"></el-option>
              <el-option label="建议" value="建议"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="具体内容:">
            <el-input :rows="10" type="textarea" v-model="form.mes"></el-input>
          </el-form-item>


          <el-form-item>
            <div class="btn-group">
              <el-button type="primary" @click="onSubmit">提 交</el-button>
              <el-button class="btn-group-right">取 消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import modelLabel from "@/components/public/modelLabel";
import service from "@/service/complaintAndSuggestion/complaintAndSuggestionService";

export default {
  name: "creatSheet",
  components: {
    modelLabel
  },
  data() {
    return {
      form: {
        title: "",
        _type: "",
        mes: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.judge()) {
        return;
      }

      service.create();
      console.log("submit!");
    },
    judge() {
      // console.log(this.form.title)
      // console.log(this.form._type)
      // console.log(this.form.mes)
      if (
        this.form.title == "" ||
        this.form._type == "" ||
        this.form.mes == ""
      ) {
        this.$message({
          message: "所有内容不能为空!",
          type: "error"
        });
        return true;
      }
    }
  }
};
</script>


<style scoped>
.creatSheet-container {
  padding-left: 200px;
  padding-right: 200px;
}

.container {
  /* height: 1000px; */
  margin-top: 50px;
}

.el-form-item {
  margin-bottom: 70px;
  text-align-last: justify;
}

.el-form-item__content {
  margin-left: 100px !important;
}

.el-select {
  width: 100%;
}

.btn-group {
  text-align: center;
  margin: 0 auto;
  margin-left: 30%;
}

.btn-group-right {
  margin-left: 150px;
}

</style>

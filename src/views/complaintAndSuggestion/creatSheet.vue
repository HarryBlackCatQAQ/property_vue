/*
 * @Author: Harry 
 * @Date: 2019-10-13 16:00:35 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-15 00:29:16
 */

<template>
  <div class="creatSheet">
    <div>
      <modelLabel icon="el-icon-edit-outline" title="投诉检验单申请" />
    </div>
    <div class="creatSheet-container">
      <div v-loading="sheetLoading" class="container">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="主题:">
            <el-input v-model="form.title"></el-input>
          </el-form-item>

          <el-form-item label="类型:">
            <el-select v-model="form._type" placeholder="请选择类型">
              <el-option label="投诉" value="投诉"></el-option>
              <el-option label="建议" value="建议"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="具体内容:">
            <el-input class="sheet-textarea" :rows="10" type="textarea" v-model="form.mes"></el-input>
          </el-form-item>

          <el-upload
            class="upload-demo"
            action="/api/fileUpload/uploadComplaintAndSuggestionImage"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
            drag
            name="files"
            ref="upload"
            :auto-upload="false"
            :multiple="true"
            :http-request="uploadFile"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>

          <el-form-item class="form-bottom">
            <div class="btn-group">
              <el-button type="primary" @click="subPicForm">提 交</el-button>
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
import service from "@/service/complaintAndSuggestion/creatSheetService";
import axios from "axios";
import util from "@/service/util"

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
      },
      fileList: [],
      formDate: "",
      sheetLoading:false
    };
  },
  methods: {
    uploadFile(file) {
        // console.log(file);
        this.fileList.push(file)
      this.formDate.append("files", file.file);
    },
    subPicForm() {
      if (this.judge()) {
        return;
      }
    //   this.$refs.upload.submit();
    //   service.create(this.form.title,this.form._type,this.form.mes);
    //   console.log("submit!");
      let that = this;
      that.sheetLoading = true;
    //   let res = service.uploadImage(this);
        let res = service.create(this.form.title,this.form._type,this.form.mes);

      res.then(response => {
        //   console.log(response)
        //   console.log(this.fileList)
          let res2 = service.uploadImage(this,response.data.sheetId);
          
        res2.then(response2 => {
            // console.log(response2)
            that.sheetLoading = false;
            that.initParm();
            util.message(that,"提交成功!","success");
            
         })
      })
    },
    initParm(){
        this.form.title = "";
        this.form._type = "";
        this.form.mes = "";
        this.fileList = [];
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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

.form-bottom {
  margin-top: 100px;
}

.el-upload__tip {
  margin-top: 30px;
}

.el-upload-list{
    margin-top: 30px !important;
}

.sheet-textarea{
    text-align-last: auto; 
}
</style>

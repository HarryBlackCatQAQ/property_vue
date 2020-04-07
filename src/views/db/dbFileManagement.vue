/*
 * @Author: Harry 
 * @Date: 2020-04-07 03:05:20 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2020-04-07 14:55:19
 */

<template>
  <div class="dbFileManagement">
    <!-- dbFileManagement -->
    <div class="log-icon">
      <modelLabel icon="el-icon-coin" title="数据库备份管理" />
      <div class="log-download">
          <el-button type="primary" size="medium" @click="backUpDbFile">
          备份
          <i class="el-icon-coin el-icon--right"></i>
        </el-button>
        <el-button type="primary" size="medium" @click="downLoadDbFile">
          数据库文件下载
          <i class="el-icon-download el-icon--right"></i>
        </el-button>
      </div>
    </div>

    <div class="log-header">
      <el-row>
        <el-col :span="2">
          <div class="log-back">
            <el-page-header v-show="this.breadcrumbList.length != 1" @back="goBack"></el-page-header>
          </div>
        </el-col>

        <el-col :span="18">
          <div class="log-breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="log-file-main">
      <el-row :gutter="160" class="row-bg" justify="start">
        <el-col v-for="(item,index) in this.fileList" :key="index" :span="2">
          <div
            @click="fileClick(item.fileName,item.isDir)"
            class="grid-content bg-purple log-folder"
          >
            <div class="log-checkbox">
              <!-- @mouseenter="onMouseOver(item.fileName)"
              @mouseleave="onMouseOut(item.fileName)"-->
              <!-- <el-checkbox v-show="showList[item.fileName]"></el-checkbox> -->
            </div>
            <li>
              <i v-if="item.isDir === 1" class="el-icon-folder" />
              <i v-else class="el-icon-document" />
            </li>

            <li v-for="(namePart,i) in item.nameList" :key="i" class="log-li-text">
              <span class="log-file-text">
                {{namePart}}
              </span>
            </li>
          </div>
        </el-col>
      </el-row>
    </div>

    <dbFileDownLoadDialog />
  </div>
</template>

<script>
import modelLabel from "@/components/public/modelLabel";
import { mapState } from "vuex";
import { Loading } from "element-ui";
import util from "@/service/util";
import dbFileService from "@/service/dbManagement/dbFileService";
import dbFileDownLoadDialog from "@/components/db/dbFileDownLoadDialog";

export default {
  name: "dbFileManagement",
  components: {
    modelLabel,
    dbFileDownLoadDialog
  },
  data() {
    return {
      breadcrumbList: ["全部"],
      fileList: [],
      showList: {},
      preFileName: ""
    };
  },
  methods: {
      backUpDbFile(){
        let res = dbFileService.backUpdbFile();

        res.then(response =>{
            if(response.flag){
                this.fileLoading();
                this.$message.success("备份成功!");
            }
            else{
                this.$message.error("备份失败!请稍后再试!");
            }
        })
      },
      fileClick(idx, isDir) {
      //   console.log(idx);
      if (isDir === 1) {
        this.preFileName = this.fileList[0].preLevelName;
        this.fileLoading();
        this.breadcrumbList.push(idx);
      }
      //   console.log(this.checkBoxShowList)
    },
      goBack() {
      // console.log(this.preFileName)
      this.fileLoading();
      this.breadcrumbList.pop();
    },
    downLoadDbFile() {
      this.$store.commit("dbManagement/setDownLoadFileList", this.fileList);
      this.$store.commit("dbManagement/changeIsShowDogFileDownLoadDialog");
    },
    setFileName() {
      for (let i = 0; i < this.fileList.length; i++) {
        this.fileList[i].nameList = [];
        let fileName = this.fileList[i].fileName;
        if (fileName.length > 14) {
          this.fileList[i].nameList.push(fileName.substring(0, 14));
          this.fileList[i].nameList.push(fileName.substring(14));
        } else {
          this.fileList[i].nameList.push(fileName);
        }
      }
    },
    getFileList() {
        // dbFileService.haha();
      let res = dbFileService.getDbFileList();

      res.then(response => {
        console.log(response);
        this.fileList = response.data;
        this.setFileName();
        // this.setCheckboxShowList();
      });
    },
    fileLoading() {
      let loadingInstance = Loading.service({
        lock: true,
        text: "拼命加载中....",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      util.sleep(500).then(() => {
        this.getFileList();
        loadingInstance.close();
      });
    }
  },
  created() {
    this.preFileName = "root";
    this.getFileList();
  }
};
</script>


<style scoped>
.log-header {
  margin-top: 30px;
}

.log-back {
  width: 150px;
}
.el-page-header__title {
  font-size: 16px;
}

.log-breadcrumb {
  /* margin-top: 30px; */
}

.el-breadcrumb {
  margin-top: 4px;
  margin-left: 4px;
  font-size: 16px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  /* background-color: #f9fafc; */
  margin-right: 0px !important;
  margin-left: -80px !important;
}

.log-folder {
  font-size: 50px;
  width: 150px;
  height: 100px;
  line-height: 0px;
  position: relative;
  margin-top: 20px;
}

.log-file-text {
  font-size: 14px;
  display: inline;
  /* height: 130px;
  width: 130px; */
}

.log-li-text {
  height: 17px;
  /* width: 130px; */
}

.log-checkbox {
  margin-left: 130px;
  height: 10px;
}

.log-file-main {
  /* margin-left: 70px; */
  margin-top: 20px;
  margin-right: 0px !important;
}

li {
  list-style: none;
}

.log-icon {
  /* display: inline-block; */
  width: 100%;
  height: 100%;
}

.log-download {
  float: right;
  line-height: 0px;
}
</style>>


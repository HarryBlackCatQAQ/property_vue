/*
 * @Author: Harry 
 * @Date: 2020-04-07 03:05:15 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2020-04-07 14:53:25
 */

import _this from '@/main'
import api from '@/service/api/serviceApi'
import { get } from 'https';

const that = _this._this

 export default {
    async getDbFileList(){
        let res;

        await that.$get(api.dbManagement.url.getDbFileList)
        .then(response =>{
            res = response;
        })

        return res;
    },
    downloadDbFile(list){
        // console.log(list);

        for(let i = 0;i < list.length;i++){
            delete list[i].icon;
        }

        // console.log(list);
        // console.log(typeof(list))
        let config = {
            responseType:"blob"
        }
        
        that.$post(api.dbManagement.url.downloadDbFile,list,config)
        .then(res => {
            // console.log(res);
            let blob = new Blob([res]);
            let downloadElement = document.createElement("a");
            let href = window.URL.createObjectURL(blob); //创建下载的链接
            downloadElement.href = href;
            downloadElement.download = "数据库备份文件.zip"; //下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement); //下载完成移除元素
            window.URL.revokeObjectURL(href); //释放blob对象

        })
    },
    async backUpdbFile(){
        let res;

        await that.$get(api.dbManagement.url.backUpDbFile)
        .then(response =>{
            res = response;
        })

        return res;
    }
 }
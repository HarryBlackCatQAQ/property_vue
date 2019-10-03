/*
 * @Author: Harry 
 * @Date: 2019-06-21 02:53:14 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-03 23:53:50
 */
import axios from 'axios';

// axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://127.0.0.1:8519'

//http request 拦截器
axios.interceptors.request.use(

  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie

    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/json;charset=utf-8'
    }
    

    //从localStorageHelper中获取token，但是现在已经给客户端token了所以现在这个没有用了
     if(localStorage.getItem("token") && checkUrl(config.url)){
       if(config.url != "/send" && config.url != "/close"){
        config.headers.Authorization = localStorage.getItem("token");
       }
    }


  

    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

function checkUrl(url){
  let f1 = url.indexOf("registered") !== -1 ? true:false
  // console.log(f1)
  let f2 = url.indexOf("login") !== -1 ? true:false
  // console.log(f2)

  return !(f1 || f2);
}

//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    
    if(response.headers.hasOwnProperty("token")){
      let obj = JSON.parse(response.request.response)
      obj.token = response.headers.token
      response.data = obj;
    }

    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装get方法 用于下载文件
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetchDownLoad(url,params={},that=1){
  return new Promise((resolve,reject) => {
    // console.log(that)
    if(that == 1){
      a(url,params,resolve,reject);
    }
    else{
      b(url,params,resolve,reject,that);
    }
  })
}

function b(url,params,resolve,reject,that){
  axios.get(url,{
    params:params
    ,responseType:"blob",
    onDownloadProgress(a) {
      // console.log("load:" + a.loaded + "  total:" + a.total);
      let percent = (a.loaded / a.total) * 100;
      percent = percent.toFixed(0);
      // console.log(percent);
      // console.log(that.progressVal);
      percent = Number(percent);
      that.progressVal = Number(percent);
      // console.log(percent);
    }
  })
  .then(response => {
    resolve(response.data);
  })
  .catch(err => {
    reject(err)
  })
}

function a(url,params,resolve,reject){
  axios.get(url,{
    params:params
    ,responseType:"blob",
    onDownloadProgress(a) {
      console.log(a);
      console.log("load:" + a.loaded + "  total:" + a.total);
      let percent = (a.loaded / a.total) * 100;
      percent = percent.toFixed(2);
      console.log(percent);
      // console.log(that.progressVal);
      percent = Number(percent);
      // that.progressVal = Number(percent);
      console.log(percent);
    }
  })
  .then(response => {
    resolve(response.data);
  })
  .catch(err => {
    reject(err)
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}
/*
 * @Author: Harry 
 * @Date: 2019-09-18 03:39:07 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 03:42:02
 */
import sha1 from "sha1";

export default {
    /**
     * 进行页面之间的跳转
     * @param {string} path 
     */
    linkPage(path) {
        path = isHtml(path);

        let url = window.location.href;
        // console.log(url);
        let endIdx = url.indexOf("#");
        // console.log(endIdx);
        let startIdx;

        for (let i = endIdx; i >= 0; i--) {
            if (url[i] === '/') {
                startIdx = i;
                break;
            }
        }

        // console.log(startIdx);

        let newUrl = url.substring(0, startIdx + 1) + path + "#/";
        // console.log(newUrl);

        return newUrl;
    },

    /**
     * 使用 SHA1算法进行加密
     * @param {string} password 
     */
    SHA1(password) {
        return sha1(password);
    },

    /**
     *  sleep睡眠工具 time 1000为1秒
     * @param {*} time 
     */
    sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
}

/**
 * 判断是否有html后缀，没有自动帮其加上
 * @param {string} path 
 */
function isHtml(path) {
    let idx = path.indexOf(".");
    if (idx == -1) {
        return path + ".html";
    }

    return path;
}
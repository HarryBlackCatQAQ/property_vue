/*
 * @Author: Harry 
 * @Date: 2019-09-18 03:39:07 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-01 04:04:38
 */
import sha1 from "sha1";

export default {
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

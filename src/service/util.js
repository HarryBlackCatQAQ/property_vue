/*
 * @Author: Harry 
 * @Date: 2019-09-18 03:39:07 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-09-18 03:40:08
 */

export default {
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
    }
}

function isHtml(path){
    let idx = path.indexOf(".");
    if(idx == -1){
      return path + ".html";
    }
  
    return path;
  }
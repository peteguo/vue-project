/**
 * Created by guofei on 2017/6/2.
 */
const webctx = '';

// https://github.com/rstacruz/nprogress
import "nprogress/nprogress.css"
import NProgress from "nprogress"
NProgress.configure({ showSpinner: true })
const _req = (url, type = 'POST', data = {}) => {
  return new Promise((resolve, reject) => {
    if (/\?/g.test(url)) {
      url += '&r=' + Math.random();
    } else {
      url += '?r=' + Math.random();
    }
    $.ajax({
      url: `${webctx}${url}`,
      type: type,
      data: data,
      dataType: 'json',
      contentType: 'application/json;charset=UTF-8',
      timeout: process.env.NODE_ENV == 'development' ? 10 * 1000 : 60 * 1000,
      success: data => resolve(data),
      error: xhrErr => reject(xhrErr)
    });
  });
};
const _reqType = function (type) {
  return function (url, data, progress) {
    // 处理参数
    progress = typeof progress === 'boolean' ? progress : true
    progress = typeof data === 'boolean' ? data : progress
    data = (typeof data === 'boolean' || !data) ? {} : data

    progress && NProgress.start()

    return _req(url, type, data)
      .then(data => {
        progress && NProgress.done()
        return Promise.resolve(data)
      })
      .catch(xhrErr => {
        progress && NProgress.done()

        // 这里捕获所有的网络请求错误
        console.log("网络请求错误: ", xhrErr)
        if (xhrErr && xhrErr.statusText) {
          alert("网络请求错误: " + xhrErr.statusText)
        }
        return false
      })
  }
}





export default {
  get : _reqType('GET'),
  post: _reqType('POST'),
}

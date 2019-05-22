
import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import {getToken} from './auth'

// 创建axios实例
const service = axios.create({
  withCredentials: true,
  timeout: 15000                  // 请求超时时间
});

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // let each request carry token
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
);

// response interceptor
service.interceptors.response.use(

  response => {
    const res = response.data;
    if (res.code !== 200) {

      if(res.code === 4001){
        Message({
          message: '用户名密码错误',
          type: 'error',
          duration: 5 * 1000
        })
      }

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
);

export default service;


import axios from 'axios'
import store from '../store'
import {getToken} from './auth'
import {alertErrorMsg} from './message'

const service = axios.create({
  withCredentials: true,
  timeout: 15000
});


service.interceptors.request.use(

  config => {
    console.log("【service request】 : ",config.url);
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log("service reject",error);
    return Promise.reject(error)
  }

);


service.interceptors.response.use(

  response => {
    const res = response.data;
    console.log("【service response】 : ",res);
    switch (res.code) {
      case 200:
        return res;
      //服务器内部错误
      case 500:
        alertErrorMsg(res.data);
        break;
      //尚未登录
      case 4001:
        alertErrorMsg(res.msg);
        //将跳转的路由path作为参数，登录成功后跳转到该路由
        this.$route.replace({
          path: 'login',
          query: { redirect: router.currentRoute.fullPath }
        });
        break;
      //用户被禁用
      case 4002:
        alertErrorMsg(res.msg);
        break;
      //暂无权限
      case 4003:
        alertErrorMsg(res.msg);
        break;
      //用户名密码错误
      case 4004:
        alertErrorMsg(res.msg);
        break;
    }
    return Promise.reject(res)
  },
  err => {
    console.log("【service response】请求发生了错误 : ",err);
    alertErrorMsg(`错误代码：${err.response.status},未找到可用的后台服务！`);
    return Promise.reject(err)
  }
);

export default service;

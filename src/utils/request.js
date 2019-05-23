
import axios from 'axios'
import { Message} from 'element-ui'
import store from '../store'
import {getToken} from './auth'
import {alertMsg,alertErrorMsg,alertSuccessMsg} from './message'


const service = axios.create({
  withCredentials: true,
  timeout: 15000
});


service.interceptors.request.use(

  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }

);


service.interceptors.response.use(

  response => {
    const res = response.data;

    switch (res.code) {
      case 200:
        return res;
      //未登录
      case 4001:
        alertErrorMsg(res.msg);
        this.$route.replace({
          path: 'login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
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

    return Promise.reject(res.data || 'error')
  },
  error => {
    console.log('err' + error);
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
);

export default service;

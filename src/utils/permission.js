
import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {Message} from 'element-ui'
import {getName, getToken} from "utils/auth";

const whiteList = ['/login', '/register']; // 不重定向白名单

/**
 * 跳转之前
 */
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    if (getToken()==="true") {
      next();
      NProgress.done()
    } else {
      next({path: '/login'});
      NProgress.done()
    }
  }
});

/**
 * 跳转之后
 */
router.afterEach(() => {
  NProgress.done() // 结束Progress
});

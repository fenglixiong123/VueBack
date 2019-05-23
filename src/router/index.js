import Vue from 'vue'
import Router from 'vue-router'
import staticRoute from './staticRoute'
import {getToken} from '../utils/auth'
import NProgress from 'nprogress'
import store from '../store'

Vue.use(Router);

const router = new Router({
  mode:'hash',
  linkActiveClass:'active',
  routes: staticRoute
});

/**
 * 钩子函数
 * 全局钩子来拦截导航
 */
router.beforeEach((to,from,next)=>{
  let token = getToken();
  console.log(`======>beforeForward:url:${to.fullPath},token:${token}`);
  NProgress.start();
  if(to.meta.auth){
    if(token && token!=='undefined'){
      console.log("token有效");
      NProgress.done();
      next();
    }else {
      NProgress.done();
      console.log("token无效");
      store.dispatch('user/resetToken');
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }else{
    next();
  }
});

export default router;

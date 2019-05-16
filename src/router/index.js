import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Guide from "../components/Guide";
import Setting from "../components/Setting";
import Statistic from "../components/Statistic";

Vue.use(Router);

export default new Router({
  mode:'hash',
  linkActiveClass:'active',
  routes: [
    {
      path:'/',
      redirect:'/activeHome'
    },
    {
      path:'/activeHome',
      name:'Home',
      component:Home
    },
    {
      path:'/login',
      component:()=>import('../page/login')  //路由懒加载,提高效率
    },
    {
      path:'/activeStatistic',
      name:'Statistic',
      component:Statistic
    },
    {
      path:'/activeGuide',
      name:'Guide',
      component:Guide
    },
    {
      path:'/systemSet',
      name:'Setting',
      component:Setting
    },
    {
      path:'*',
      redirect: '/404'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Guide from "../components/Guide";
import Setting from "../components/Setting";
import Statistic from "../components/Statistic";
import Time from "../components/Time";
import Login from "../view/login";
import House from "../components/House";

Vue.use(Router);

export default new Router({
  mode:'hash',
  linkActiveClass:'active',
  routes: [
    {
      path:'/login',
      component: Login
    },
    {
      path:'/home',
      component:House
    },
    {
      path:'/time',
      component: Time
    },
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

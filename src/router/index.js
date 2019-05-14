import Vue from 'vue'
import Router from 'vue-router'
import LearnElement from '../components/LearnElement'
import Home from "../components/Home";
import Guide from "../components/Guide";
import Setting from "../components/Setting";
import activePublic from '../page/activePublic'
import step1 from '../page/activePublic/step1'
import step2 from '../page/activePublic/step2'
import step3 from '../page/activePublic/step3'
import step4 from '../page/activePublic/step4'
import Statistic from "../components/Statistic";

Vue.use(Router);

export default new Router({
  mode:'hash',
  linkActiveClass:'active',
  routes: [
    {
      path: '/learnElement',
      name: 'LearnElement',
      component: LearnElement
    },
    {
      path:'/activeHome',
      name:'Home',
      component:Home
    },
    {
      path:'/activePublic',
      name:'activePublic',
      component:activePublic,
      children:[
        //路径为'/activePublic'，使用组件step1
        // {path:'',component:step1},
        {path:'step1',component:step1},
        {path:'step2',component:step2},
        {path:'step3',component:step3},
        {path:'step4',component:step4},
      ]
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
    }
  ]
})

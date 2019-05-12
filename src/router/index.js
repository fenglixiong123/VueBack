import Vue from 'vue'
import Router from 'vue-router'
import LearnElement from '@/components/LearnElement'

Vue.use(Router);

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/learnElement',
      name: 'LearnElement',
      component: LearnElement
    }
  ]
})

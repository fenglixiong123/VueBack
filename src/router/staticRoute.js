
import Login from "../view/login";
import Home from "../view/home";
import House from "../view/house";
import Time from "../view/time";
import Guide from "../view/guide";
import Setting from "../view/setting";
import Statistic from "../view/statistic";
import Test from "../components/Test";

const staticRoute = [
  {
    path:'/',
    redirect: '/home/house'
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/home',
    component:Home,
    meta:{
      auth:true
    },
    children:[
      {
        path:'house',
        component:House,
        meta:{
          auth:true
        }
      },
      {
        path: 'time',
        component: Time,
        meta: {
          auth: true
        }
      },
      {
        path:'guide',
        component:Guide
      },
      {
        path:'setting',
        component:Setting
      },
    ]
  },
  {
    path:'/static',
    component:Statistic
  },
  {
    path:'/test',
    component: Test
  },
  {
    path:'*',
    redirect: '/404'
  }
];

export default staticRoute;

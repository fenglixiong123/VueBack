import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;
Vue.use(Element);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

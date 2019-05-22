import Vue from 'vue'
import Vuex from 'vuex'
//导入根元素和模块元素
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import vueModules from './modules'

Vue.use(Vuex);


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:vueModules
});

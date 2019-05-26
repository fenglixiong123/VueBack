import {apiLogin,apiLogout,apiUserInfo} from '../../api/api_auth'
import { getToken, setToken, removeToken } from '../../utils/auth'
import {getUser,setUser,removeUser} from '../../utils/info'

/**
 * 这样做原因：
 * 由于state当浏览器刷新时候会清空state
 * 所以利用localStorage来保存数据不被清空，
 * 刷新的话从localStorage中重新取数据
 * @type {{userInfo: any, token}}
 */
const state = {
  token:getToken(),
  userInfo:getUser(),
};


const mutations = {
  setToken : (state, token) => {
    state.token = token
  },
  setUserInfo : (state, userInfo) => {
    state.userInfo = userInfo
  }
};

const actions = {

  login({ commit }, userInfo) {
    console.log("----->login action");
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      apiLogin({ username: username, password: password }).then(res => {
        console.log("login res:",res);
        commit('setToken', res.data);
        setToken(res.data);
        resolve(res);
      },err=>{
        reject(err);
      })
    })
  },
  getInfo({ commit, state }) {
    console.log("----->getInfo action");
    return new Promise((resolve, reject) => {
      apiUserInfo(state.token).then(res => {
        commit('setUserInfo',res.data);
        setUser(res.data);
        resolve(res);
      },err=>{
        reject(err);
      })
    })
  },

  logout({ commit, state }) {
    console.log("----->logout action");
    return new Promise((resolve, reject) => {
      apiLogout(state.token).then(() => {
        commit('setToken', '');
        removeToken();
        removeUser();
        resolve();
      })
    })
  },

  resetToken({ commit }) {
    console.log("----->resetToken action");
    return new Promise(resolve => {
      commit('setToken', '');
      removeToken();
      removeUser();
      resolve()
    })
  },
};

export default {
  namespaced:true,
  state,
  mutations,
  actions
}

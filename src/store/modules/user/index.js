import {apiLogin,apiLogout,apiUserInfo} from '../../../api/api_user'
import { getToken, setToken, removeToken } from '../../../utils/auth'
import {setUser,removeUser} from '../../../utils/info'

const state = {
  token:getToken(),
  name:''
};


const mutations = {
  setToken : (state, token) => {
    state.token = token
  },
  setName : (state, name) => {
    state.name = name
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
      })
    })
  },
  getInfo({ commit, state }) {
    console.log("----->getInfo action");
    return new Promise((resolve, reject) => {
      apiUserInfo(state.token).then(res => {
        if (res.code!==200) {
          reject('User info is blank')
        }
        commit('setName',res.data.username);
        setUser(res.data);
        resolve(res);
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

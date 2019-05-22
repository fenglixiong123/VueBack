import {login,logout,getInfo} from '../../../api/user'
import { getToken, setToken, removeToken } from '../../../utils/auth'

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
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(res => {
        const { data } = res;
        commit('setToken', data.data);
        setToken(data.data);
        resolve(res);
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response;

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { name } = data;

        commit('setName', name);

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('setToken', '');
        removeToken();
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('setToken', '');
      removeToken();
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

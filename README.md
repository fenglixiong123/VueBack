# VueBack
a vue back project with element-ui for newer

解决页面刷新
```
const state = {
  userId: window.localStorage.getItem('userId') //这里写初始值
}
const getters = {
  userId: state => state.userId
}
const mutations = {
  [types.SET_USER_ID] (state, id) {
    state.userId = id
    window.localStorage.setItem('userId', id) // 在mutation里面取数据的时候就先去set一次
  }
}
```

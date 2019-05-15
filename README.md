# VueBack
a vue back project with element-ui for newer

演示地址：http://47.100.96.101:8080/xiong/#/activeHome

Cube3D Cube3DBig 分别是独立出的组件可以显示照片盒子

遇到的问题：

1.tomcat部署

目标访问路径为：http://47.100.96.101:8080/xiong/   
所以要把项目放在tomcat/webapps/xiong文件夹下面  

修改css、js访问路径
assetsPublicPath: '/xiong/'

修改图片访问路径  
将图片放在static/img下面由url-loader解析  
写的时候src = static/img/xxx.jpg

最后webpack打包生成dist文件  
npm run build

将生成的dist文件放入/webapps/xiong文件夹下面  
启动tomcat访问

2.解决页面刷新
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

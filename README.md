# VueBack
a vue back project with element-ui for newer

演示地址：http://47.100.96.101:8080/xiong/#/activeHome

Cube3D Cube3DBig 分别是独立出的组件可以显示照片盒子

###Promise用法
```
testPromise:function () {
  this.runAsync()
    .then(res=>{
      console.log("testPromise res : ",res);
    })
    .catch(err=>{
      console.log("testPromise err : ",err);
    })
},
runAsync:function () {
  return new Promise((resolve,reject)=>{
    setTimeout(function () {
      console.log("runAsync exec");
      let f = false;
      if(f)
        resolve("完成");
      else
        reject("失败")
    },2000)
  })
}
```
正常情况下new一个promise对象之后不要调用catch方法，
不然会直接catch掉reject方法，用promise的初衷是为了把信息传递到下游的函数

遇到的问题：

###2019.5.27
完成登录功能以及列表展示功能，暂时封版

##2019.5.22添加登录功能
添加进度条插件  
npm install --save nprogress  
- 基本用法：  
NProgress.start();  
NProgress.done();  
- 高级用法
NProgress.set(0.0);       
NProgress.set(0.4);  
NProgress.set(1.0);  
- 图片加载
NProgress.inc();  
NProgress.done(true);  


##登录流程梳理
- 首次登录时，后端服务器判断用户账号密码正确之后，根据用户id、用户名、定义好的秘钥、过期时间生成 token ，返回给前端；
- 前端拿到后端返回的 token ,存储在 Cookie 和 Vuex 里；
- 前端每次路由跳转，判断 Cookie 有无 token ，没有则跳转到登录页，有则请求获取用户信息，改变登录状态；
- 每次请求接口，在 Axios 请求头里携带 token;
- 后端接口判断请求头有无 token，没有或者 token 过期，返回401；
- 前端得到 401 状态码，重定向到登录页面。

###路由判断
- 访问登录注册之外的路由，都需要登录权限，比如首页，判断有无token，有则访问成功，没有则跳转到登录页面；
- 成功登录之后，跳转到之前重定向过来的页面；
- token 过期后，请求接口时，身份过期，跳转到登录页，继续第二步；这一步主要用了可以做7天自动登录等功能。

##tomcat部署

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

##解决页面刷新
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

##增加路径别名

我们可以增加路径别名，以减少开发过程中路径的复杂性。  
webpack.base.conf.js  
```ang
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'util': '@/util',
      'asset': '@/asset'
      ...
    }
}
```
##修改index.html位置
```alar2
// 开发环境：webpack.dev.conf.js
new HtmlWebpackPlugin({
    filename: 'index.html',
    // template: 'index.html',
    template: './src/index.html',
    inject: true
})

// 生产环境`webpack.prod.conf.js`
new HtmlWebpackPlugin({
    filename: config.build.index,
    // template: 'index.html',
    template: './src/index.html',
    ...
}),
```
##完善各种类型的css-loader
如果你想以后不再轻易动package.json的话，你完全可以把这些loader都安装上。  
npm install node-sass sass-loader less less-loader --save-dev

##权限功能

登录 ——> 获取该用户权限列表 ——> 根据权限列表生成能够访问的菜单 ——> 点击菜单，进入页面


## 基本配置
constructor(props){   
    // 构造方法 对对象的初始化 只要存在constructor就要调用super()，但是，不是每个react组件都需要constructor，当没有调用super()时，this还没有被初始化，所以不能使用
        super()   
        // 继承  当需要在constructor中访问this.props的情况下，必须要调用super(props)
    }
##
## 实时获取屏幕宽度
```
$(window).resize(function(){
    ···
})
```

## react 路由
```
npm install react-router-dom
```
HashRouter 会有一个#，通过这个# HTML 5 History进行前端跳转他的感觉像锚点
BrowserHistory 很简洁没有#，但是需要 server 端支持

## 基本配置
```
constructor(props){   // 构造方法 对对象的初始化 只要存在constructor就要调用super()，但是，不是每个react组件都需要constructor，当没有调用super()时，this还没有被初始化，所以不能使用
    super()   // 继承  当需要在constructor中访问this.props的情况下，必须要调用super(props)
}
```

## 实时获取屏幕宽度
```
$(window).resize(function(){
    ···
})
```

## 媒体查询 常见尺寸
```
@media screen and (min-width:1200px)
@media screen and (min-width:992px)
@media screen and (min-width:768px)
@media screen and (min-width:480px)
```

## react 路由
```
npm install react-router-dom
```
HashRouter 会有一个#，通过这个# HTML 5 History进行前端跳转他的感觉像锚点
BrowserHistory 很简洁没有#，但是需要 server 端支持

## 剪切 clip
```
clip:rect(0,80px,160px,0);
```
参数：
- 上面减去多少
- 左边显示多少
- 上面显示多少
- 左边减去多少

## bug
- 响应式 样式互相影响
    $(window).resize(function(){}) 实时获取屏幕宽度 及时更新
- 滚轮事件 到一定高度加载动画 会重复加载
    加 flag 开关，执行一次即关闭


## 组件传值
- 父向子传值  通过 props 传值
    - 子组件
    ```
    class Children extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div>这是：{this.props.name}</div>  // 这是 父向子
            )
        }
    }
    ```
    - 父组件
    ```
    class App extends React.Component{
        render(){
            return(
                <div>
                    <Children name="父向子"/>
                </div>
            )
        }
    }
    ```
- 子向父传值  回调函数
    - 子组件
    ```
    class Children extends Component{
        constructor(props){
            super(props);
        }
        handerClick(){
            this.props.changeColor('skyblue')  // 执行父组件的changeColor 并传参  必须和父组件中的函数一模一样
        }
        render(){
            return(
                <div>
                    <div>父组件的背景色{this.props.bgcolor}</div>  // 子组件接收父组件传过来的值 bgcolor
                    <button onClick={(e)=>{this.handerClick(e)}}>改变父组件背景</button>  // 子组件执行函数
                </div>
            )
        }
    }
    ```
    - 父组件
    ```
    class Father extends Component{
        constructor(props){
            super(props)
            this.state = {
                bgcolor:'pink'
            }
        }
        bgChange(color){
            this.setState({
                bgcolor:color
            })
        }
        render(props){
            <div style={{background:this.state.bgcolor}}>
                            // 给子组件传递的值  color  
                <Children bgcolor={this.state.bgcolor} changeColor={(color)=>{this.bgChange(color)}} /> 
                                                    // changeColor 子组件的参数=color 当做形参
            </div>
        }
    }
    ```
- 兄弟组件传值 子传给父 父再传给另一个子
    - 子组件1
    ```
    class Children1 extends Component{
        constructor(props){
            super(props);
        }
        handerClick(){
            this.props.changeChild2Color('skyblue')  
            // 改变兄弟组件的颜色  把changeChild2Color的参数传给父
        }
        render(){
            return(
                <div>
                    <div>children1</div>
                    <button onClick={(e)=>{this.handerClick(e)}}>改变children2背景</button>
                </div>
            )
        }
    }
    ```
    - 子组件2
    ```
    class Children1 extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div style={{background:this.props.bgcolor}}>
                // 从父元素获取自己的背景色
                    <div>children2 背景色 {this.props.bgcolor}</div>
                    // children2 背景色 skyblue
                </div>
            )
        }
    }
    ```
    - 父组件
    ```
    class Father extends Component{
        constructor(props){
            super(props)
            this.state = {
                child2bgcolor:'pink'
            }
        }
        onchild2bgChange(color){
            this.setState({
                child2bgcolor:color
            })
        }
        render(props){
            <div>
                <Children1 changeChild2Color={(color)=>{this.onchild2bgChange(color)}} />
                <Children2 bgcolor={this.state.child2bgcolor} />
            </div>
        }
    }
    ```


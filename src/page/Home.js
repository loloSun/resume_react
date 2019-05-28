import React,{Component} from 'react'
import '../static/css/Home.css'
import $ from 'jquery'

class Home extends Component{
    constructor(props){   // 构造方法 对对象的初始化 只要存在constructor就要调用super()，但是，不是每个react组件都需要constructor，当没有调用super()时，this还没有被初始化，所以不能使用
        super(props)   // 继承  当需要在constructor中访问this.props的情况下，必须要调用super(props)
    }

    // 挂载
    componentDidMount(){
        $(".list li").each(function(index){
            $(this).animate({
                marginLeft:'0px'
            },500+(index*200))
        })
    }

    // list显示隐藏
    setClick(){
        // $('.list li').animate({width:'toggle'},500);
        if($('.list li').css('margin-left') == '0px'){
            $(".list li").each(function(index){
                $(this).animate({
                    marginLeft:'-120px'
                },500+(index*200))
            })
        } else {
            $(".list li").each(function(index){
                $(this).animate({
                    marginLeft:'0'
                },500+(index*200))
            })
        }
    }

    render() {
        const pageImg = {
            background:'url(' + require("../static/img/cover_bg_3.jpg") + ')'
        }
        return (
            <div className="page" style={pageImg}>
                {/* 遮罩 */}
                <div className="cover"></div>
                {/* 内容 */}
                <div className="container">
                    <div className="logo_img">
                        <img src={require("../static/img/logo_img.jpg")} alt="" />
                    </div>
                    <h1>
                        <span>孙晓琪</span>
                    </h1>
                    <h3>
                        <span>web 前端开发工程师</span>
                    </h3>
                </div>
                <ul className="list">
                    <div className="set" onClick={this.setClick.bind(this)}>
                        <img src={require('../static/img/set.png')} alt="" />
                    </div>
                    <li>
                        <a href="aboutMe.html">
                            <span>About Me</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);">
                            <span>技能</span>
                        </a>
                    </li>
                    <li>
                        <a href="../html/project.html">
                            <span>项目经验</span>
                        </a>
                    </li>
                    <li>
                        <a href="../html/article.html">
                            <span>文章动态</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home
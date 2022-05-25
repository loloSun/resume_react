import React,{Component} from 'react'
import '../static/css/Home.css'
import $ from 'jquery'
import {Link} from 'react-router-dom'

// import Router from '../Router'

import AboutMe from './paging/AboutMe'

class Home extends Component{
    constructor(props){   // 构造方法 对对象的初始化 只要存在constructor就要调用super()，但是，不是每个react组件都需要constructor，当没有调用super()时，this还没有被初始化，所以不能使用
        super()   // 继承  当需要在constructor中访问this.props的情况下，必须要调用super(props)
    }

    // 挂载
    componentDidMount(){
        $(".list li").each(function(index){
            $(this).animate({
                marginLeft:'0px'
            },500+(index*200))
        })

        // 实时获取屏幕宽度
        $(window).resize(function(){
            if($(window).width() > 768){
                $(".list li").css({display:"block"})
            } else {
                $(".list li").css({display:"none"})
            }
        })
    }

    // list显示隐藏
    setClick(){
        if($(window).width() < 768){
            $('.list li').slideToggle()
        } else{
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
    }

    render() {
        const pageImg = {
            background:'url(' + require("../static/img/cover_bg_3.jpg") + ')',
        }
        return (
            <div className="page" style={pageImg}>
                {/* 遮罩 */}
                <div className="cover"></div>
                {/* 内容 */}
                <div className="container">
                    <div className="logo_img">
                        <img src={require("../static/img/logo_header.jpg")} alt="" />
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
                        <Link to={{pathname:'/AboutMe'}} className="aboutme">AboutMe</Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/Skill'}} className="skill">技 术</Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/Project'}} className="project">项目经验</Link>
                    </li>
                    <li>
                        <a href='//segmentfault.com/u/axigua' className="article" target="_blank">文章 笔记</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home
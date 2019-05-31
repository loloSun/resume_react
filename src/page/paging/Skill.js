import React,{Component} from 'react'

import Nav from '../../component/Nav'
import '../../static/css/skill.css'
import $ from 'jquery'

class Skill extends Component{
    constructor(props){
        super(props)
    }

    // 挂载
    componentDidMount(){
        let flag = false
        $(window).on('scroll',()=>{
            var top
            if($(window).width() < 992){
                top = $('.progresses').offset().top / 2
            } else {
                top = 100
            }
            if($(window).scrollTop() > top && !flag){
                flag = true
                $(".progress_bar").each(function(index){
                    $(this).animate({
                        width:$(this).data("width")
                    },500)
                })
            }
        })
    }

    render(){
        return(
            <div className='page skill'>
                <Nav />
                <div className="content">
                    <h2 className='title'>Skills</h2>
                    <div className='circular'>
                        <ul>
                            <li>
                                <div className='bigone'>
                                    <div className="middle_1" style={{transform: "rotate(-54deg)",transformOrigin:"right"}}>
                                        <div className='inone'></div>
                                    </div>
                                    <div className="middle_2">
                                        <div className='inone'></div>
                                    </div>
                                    <div className='smallone'>
                                        <span>
                                            <strong>HTML5</strong>
                                            <br/>
                                            85%
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='bigone'>
                                    <div className="middle_1" style={{transform: "rotate(-72deg)",transformOrigin:"right"}}>
                                        <div className='inone'></div>
                                    </div>
                                    <div className="middle_2">
                                        <div className='inone'></div>
                                    </div>
                                    <div className='smallone'>
                                        <span>
                                            <strong>CSS 3</strong>
                                            <br/>
                                            80%
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='bigone'>
                                    <div className="middle_1" style={{transform: "rotate(-72deg)",transformOrigin:"right"}}>
                                        <div className='inone'></div>
                                    </div>
                                    <div className="middle_2">
                                        <div className='inone'></div>
                                    </div>
                                    <div className='smallone'>
                                        <span>
                                            <strong>JavaScript</strong>
                                            <br/>
                                            80%
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='bigone'>
                                    <div className="middle_1" style={{transform: "rotate(-108deg)",transformOrigin:"right"}}>
                                        <div className='inone'></div>
                                    </div>
                                    <div className="middle_2">
                                        <div className='inone'></div>
                                    </div>
                                    <div className='smallone'>
                                        <span>
                                            <strong>jquery</strong>
                                            <br/>
                                            70%
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='bigone'>
                                    <div className="middle_1" style={{transform: "rotate(-90deg)",transformOrigin:"right"}}>
                                        <div className='inone'></div>
                                    </div>
                                    <div className="middle_2">
                                        <div className='inone'></div>
                                    </div>
                                    <div className='smallone'>
                                        <span>
                                            <strong>VUE</strong>
                                            <br/>
                                            75%
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='bigone'>
                                    <div className="middle_1" style={{transform: "rotate(-180deg)",transformOrigin:"right"}}>
                                        <div className='inone'></div>
                                    </div>
                                    <div className="middle_2">
                                        <div className='inone'></div>
                                    </div>
                                    <div className='smallone'>
                                        <span>
                                            <strong>react</strong>
                                            <br/>
                                            50%
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='bigone'>
                                    <div className="middle_1" style={{transform: "rotate(-90deg)",transformOrigin:"right"}}>
                                        <div className='inone'></div>
                                    </div>
                                    <div className="middle_2">
                                        <div className='inone'></div>
                                    </div>
                                    <div className='smallone'>
                                        <span>
                                            <strong>微信小程序</strong>
                                            <br/>
                                            75%
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='progresses'>
                        <ul>
                            <li>
                                <span>HTML5</span>
                                <span style={{float:"right"}}>85%</span>
                                <div className='progress'>
                                    <div className="progress_bar" data-width='85%'></div>
                                </div>
                            </li>
                            <li>
                                <span>CSS3</span>
                                <span style={{float:"right"}}>80%</span>
                                <div className='progress'>
                                    <div className="progress_bar" data-width='80%'></div>
                                </div>
                            </li>
                            <li>
                                <span>JavaScript</span>
                                <span style={{float:"right"}}>80%</span>
                                <div className='progress'>
                                    <div className="progress_bar" data-width='80%'></div>
                                </div>
                            </li>
                            <li>
                            <span>jquery</span>
                                <span style={{float:"right"}}>70%</span>
                                <div className='progress'>
                                    <div className="progress_bar" data-width='70%'></div>
                                </div>
                            </li>
                            <li>
                                <span>VUE</span>
                                <span style={{float:"right"}}>75%</span>
                                <div className='progress'>
                                    <div className="progress_bar" data-width='75%'></div>
                                </div>
                            </li>
                            <li>
                                <span>React</span>
                                <span style={{float:"right"}}>50%</span>
                                <div className='progress'>
                                    <div className="progress_bar" data-width='50%'></div>
                                </div>
                            </li>
                            <li>
                                <span>微信小程序</span>
                                <span style={{float:"right"}}>75%</span>
                                <div className='progress'>
                                    <div className="progress_bar" data-width='75%'></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skill
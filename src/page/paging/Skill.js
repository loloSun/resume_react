import React,{Component} from 'react'

import Nav from '../../component/Nav'
import '../../static/css/skill.css'

class Skill extends Component{
    constructor(props){
        super()
    }

    // 挂载
    componentDidMount(){
            // $('.bigone').animate({
            //     marginLeft:'0px'
            // },500+(index*200))
    }

    render(){
        return(
            <div className='page' style={{
                background: '#fff!important',
                color:'#FF9000!important'
            }}>
                <Nav />
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
                <div className='progress'>
                </div>
            </div>
        )
    }
}

export default Skill
import React,{Component} from 'react'

import '../../static/css/aboutme.css'

import Nav from '../../component/Nav'

class AboutMe extends Component{
    constructor(props){
        super()
    }

    render(){
        const QQimg = {
            backgroundImage :'url(' + require("../../static/img/icon/QQ.png") + ')'
        }
        const wximg = {
            backgroundImage:'url(' + require("../../static/img/icon/wx.png") + ')'
        }
        return(
            <div className='page aboutme'>
                <Nav />
                <div className="content">
                    <h2 className="title">About Me</h2>
                    <div className="cont">
                        <ul className="cont1">
                            <li>
                                <span className="first-block">Full Name:</span>
                                <span className="second-block">孙晓琪</span>
                            </li>
                            <li>
                                <span className="first-block">Phone:</span>
                                <span className="second-block">12345678910</span>
                            </li>
                            <li>
                                <span className="first-block">Email:</span>
                                <span className="second-block">17319051427@160.com</span>
                            </li>
                            <li>
                                <span className="first-block">github:</span>
                                <span className="second-block">https://github.com/loloSun</span>
                            </li>
                            <li>
                                <span className="first-block">Address:</span>
                                <span className="second-block">北京 昌平</span>
                            </li>
                            <ol>
                                <li>
                                    <i style={QQimg}></i>
                                    <img src={require("../../static/img/icon/qq.jpg")}></img>
                                </li>
                                <li>
                                    <i style={wximg}></i>
                                    <img src={require("../../static/img/icon/weixin.png")}></img>
                                </li>
                            </ol>
                        </ul>
                        <div className="cont2">
                            <h2>welcome!</h2>
                            <p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p>
                            <p>Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe
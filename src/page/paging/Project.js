import React,{Component} from 'react'
import '../../static/css/project.css'
import Nav from '../../component/Nav'

class Project extends Component{
    constructor(props){
        super()
    }

    

    render(){
        const projectList = [
            {
                id:1,
                name:'会员积分管理系统',
                info:'商城类 vue全家桶 + js + css3 + html5 + nodeJs',
                file:'project/vipDemo'
            },
            {
                id:2,
                name:'升禾环保',
                info:'展示类 jquery + css3 + html5',
                file:'project/shenghe'
            },
            {
                id:3,
                name:'装饰城',
                info:'商城类 微信小程序',
                file:'project/zhuangshi'
            },
            {
                id:4,
                name:'个人简介',
                info:'展示类 react + jquery + nodeJs',
                file:'project/resume'
            }
        ]
        const itemImg = {
            
            // background:'url(' + require("../static/img/cover_bg_3.jpg") + ')',
        }
        const listItems = projectList.map((item,index) =>
            // <li>{number}</li>
            // key 应该在数组的上下文中被指定
            <li key={item.id}>
                <a href="" style={{
                    background:"url(" + require(`../../static/img/${item.file}/index.png`) + ") center center",
                    backgroundSize:"cover"}}>
                    <div className="desc">
                        <h3>{item.name}</h3>
                        <span>{item.info}</span>
                    </div>
                </a>
            </li>
        )
        return(
            <div className='page project'>
                <Nav/>
                <div className="content">
                    <h2 className="title">Projects</h2>
                    <ul className="works">
                        {listItems}
                        {/* <li>
                            <a href="">
                                <div class="desc">
                                    <h3>会员积分管理系统</h3>
                                    <span>商城类 vue全家桶 + js + css3 + html5 + nodeJs</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="desc">
                                    <h3>升禾环保</h3>
                                    <span>展示类 jquery + css3 + html5</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="desc">
                                    <h3>兰斐婚纱摄影</h3>
                                    <span>商城类 微信小程序</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="desc">
                                    <h3>Project Name</h3>
                                    <span>Illustration</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="desc">
                                    <h3>Project Name</h3>
                                    <span>Illustration</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="desc">
                                    <h3>Project Name</h3>
                                    <span>Illustration</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="desc">
                                    <h3>Project Name</h3>
                                    <span>Illustration</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="desc">
                                    <h3>Project Name</h3>
                                    <span>Illustration</span>
                                </div>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Project
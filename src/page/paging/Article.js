import React,{Component} from 'react'
import Nav from '../../component/Nav'

class Article extends Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div className='page'>
                <Nav />
                <iframe src="//segmentfault.com/u/axigua" frameborder="0"></iframe>
            </div>
        )
    }
}

export default Article
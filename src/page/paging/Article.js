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
            </div>
        )
    }
}

export default Article
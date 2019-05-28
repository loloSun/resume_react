import React,{Component} from 'react'

import Nav from '../../component/Nav'

class AboutMe extends Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div className='page'>
                <Nav />
                AboutMe
            </div>
        )
    }
}

export default AboutMe
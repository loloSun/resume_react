import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import '../../src/static/css/nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="navBox">
               <nav className="nav">
                    <NavLink className="nav-link" to='/AboutMe' exact>AboutMe</NavLink>
                    <NavLink className="nav-link" to='/Skill'>技 术</NavLink>
                    <NavLink className="nav-link" to='/Project'>项目经验</NavLink>
                    <a className="nav-link" href='//segmentfault.com/u/axigua' target="_blank">文章 笔记</a>
                </nav> 
            </div>
        );
    }
}
export default Nav;
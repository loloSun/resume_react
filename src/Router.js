import React from 'react';
import {HashRouter, Route,Router, Switch} from 'react-router-dom';
import Home from './page/Home';
import AboutMe from './page/paging/AboutMe';
import Skill from './page/paging/Skill';
import Project from './page/paging/Project';
import Article from './page/paging/Article';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route  path="/" exact component={Home}/>
            <Route  path="/AboutMe" component={AboutMe}/>
            <Route  path="/Skill" component={Skill}/>
            <Route  path="/Project" component={Project}/>
            <Route  path="/Article" component={Article}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
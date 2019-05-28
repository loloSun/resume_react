import React from 'react';
import ReactDOM from 'react-dom';
// 路由,重定向,导航
// import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import App from './Router'
import './index.css';
// import '../public/img'
import Home from './page/Home';
import AboutMe from './page/paging/AboutMe'
import * as serviceWorker from './serviceWorker';

import $ from 'jquery'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

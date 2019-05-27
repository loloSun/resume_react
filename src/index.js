import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../public/img'
import Home from './page/Home';
import * as serviceWorker from './serviceWorker';

import $ from 'jquery'

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();

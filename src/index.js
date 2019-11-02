import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/shared/layout/Navbar';
import Comic from './components/pages/Comic';

import './assets/fonts/Comica-BD-Bold.ttf';
import './assets/fonts/Comica-BD.ttf';

ReactDOM.render(
    <Router>
        <Navbar />
        <Route exact path='/' component={App} />
        <Route exact path='/comic' component={Comic} />
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

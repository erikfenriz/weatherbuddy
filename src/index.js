import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter
} from 'react-router-dom';
import Router from './components/Router';
import './css/component-custom-switch.min.css'
import './css/styles.css';


ReactDOM.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
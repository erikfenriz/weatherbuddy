import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from 'react-router-dom';
import Router from './components/Router';
import './css/styles.css';


ReactDOM.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    , document.getElementById('react_container'));

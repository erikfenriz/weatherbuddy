import React from 'react';
import Main from './Main';
import App from '../App';

import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/city" component={App}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
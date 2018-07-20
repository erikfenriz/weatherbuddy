import React from 'react';
import App from '../App';
import Weather from "./Weather";
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/forecast/:city" component={Weather}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
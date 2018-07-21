import React from 'react';
import App from '../App';
import Weather from "./Weather";
import NotFound from "./NotFound";

import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/forecast/:city" component={Weather}/>
            <Route path="/notFound" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
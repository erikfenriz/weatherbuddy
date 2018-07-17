import React from 'react';
import Main from './Main';

import {
    BrowserRouter , Route, Switch
} from 'react-router-dom';

const Router = () =>(
<BrowserRouter>
    <Switch>
<Route exact path="/" component={Main}/>
    </Switch>
</BrowserRouter>
);

export default Router;
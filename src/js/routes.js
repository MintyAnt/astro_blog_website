import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './main/Main';
import HomePage from './home-page/HomePage';
import About from './about/About';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={About} />
    </Route>
);

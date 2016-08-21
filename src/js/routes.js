import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './main/Main';
import HomePage from './home-page/HomePage';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={HomePage} />
    </Route>
);

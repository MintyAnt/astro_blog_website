import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './main/Main';
import HomePage from './home-page/HomePage';
import About from './about/About';
import Blog from './blog/Blog';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={About} />
        <Route path="blog" component={Blog} />
    </Route>
);

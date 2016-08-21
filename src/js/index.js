/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import routes from './routes';

const history = useRouterHistory(createHistory)({ queryKey: false });

ReactDOM.render(
    <Router history={history} routes={routes} />,
    document.getElementById('content')
);

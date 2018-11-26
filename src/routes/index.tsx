import * as React from 'react';
import Header from '@src/components/header';
import Footer from '@src/components/footer';
import Home from '@src/pages/home';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export default () => (
    <Router history={history}>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Footer />
        </div>
    </Router>
);
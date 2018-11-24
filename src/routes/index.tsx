import * as React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Home from '@/pages/home';
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
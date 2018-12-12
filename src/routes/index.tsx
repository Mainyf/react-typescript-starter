import * as React from 'react';
import { Header, Footer } from '@src/components';
import { PageLayout } from '@src/layouts/pageLayout/';
import { Home } from '@src/pages/home/';
import { Download } from '@src/pages/download/';
import { Router, Route, Switch } from 'react-router';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();

export default () => (
    <Router history={history}>
        <div>
            <Header />
            <PageLayout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/download" component={Download} />
                    <Route component={NoMatch} />
                </Switch>
            </PageLayout>
            <Footer />
        </div>
    </Router>
);

function NoMatch() {
    return (<div>404 Not found.</div>);
}
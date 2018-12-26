import * as React from 'react';
import { PageLayout } from '@src/layouts/pageLayout/';
import Home from '@src/pages/home/home';
import { Router, Route, Switch } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import Footer from "@src/components/footer/footer";
import Header from "@src/components/header/header";

const history = createHashHistory();

export default () => (
    <Router history={history}>
        <div>
            <Header/>
            <PageLayout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/*<Route path="/download" component={Download} />*/}
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
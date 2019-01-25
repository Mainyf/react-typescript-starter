import * as React from 'react';
import Home from '@src/pages/home';
import { Router, Route, Switch } from 'react-router';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();

export default () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

function NoMatch() {
    return (<div>404 Not found.</div>);
}
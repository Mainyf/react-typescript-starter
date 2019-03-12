import * as React from 'react';
import loadable from 'react-loadable';
import { Router, Route, Switch } from 'react-router';
import { createHashHistory } from 'history';

const history = createHashHistory();

export const Loading = () => (
    <div>
        loading...
    </div>
);

function getComponent(loadFn: () => Promise<any>): React.ComponentType<any> {
    return loadable({
        loading: Loading,
        loader: loadFn
    });
}

export default () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={getComponent(() => import('@src/pages/home'))}/>
                <Route path="/demo" component={getComponent(() => import('@src/pages/demo'))}/>
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

function NoMatch() {
    return (<div>404 Not found.</div>);
}
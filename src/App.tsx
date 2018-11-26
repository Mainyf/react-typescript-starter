import * as React from 'react';
import {Helmet} from 'react-helmet';
import { Provider } from 'react-redux';
import Routers from './routes';
import configure from './store/configureStore';
import siteConfig from '../_config.json';

const store = configure({});

class App extends React.Component {
    public render() {
        return (
            <div id="app">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{ siteConfig.siteName }</title>
                </Helmet>
                <Provider store={store}>
                    <Routers />
                </Provider>
            </div>
        );
    }
}

export default App;

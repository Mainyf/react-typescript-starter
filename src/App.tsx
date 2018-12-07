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
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
                    <title>{ siteConfig.siteName }</title>
                    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js" />
                    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv-printshiv.min.js" />
                    <script src="https://cdn.bootcss.com/es5-shim/4.5.12/es5-shim.min.js" />
                    <script src="https://cdn.bootcss.com/es5-shim/4.5.12/es5-sham.min.js" />
                </Helmet>
                <Provider store={store}>
                    <Routers />
                </Provider>
            </div>
        );
    }
}

export default App;

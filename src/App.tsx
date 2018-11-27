import * as React from 'react';
import {Helmet} from 'react-helmet';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Helmet>
                <Provider store={store}>
                    <MuiThemeProvider>
                        <Routers />
                    </MuiThemeProvider>
                </Provider>
            </div>
        );
    }
}

export default App;

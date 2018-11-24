import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routers from './routes';
import configure from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configure({});

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

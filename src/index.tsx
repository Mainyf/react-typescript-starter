import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import '@styles/normalize.css';
import '@styles/_global.scss';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

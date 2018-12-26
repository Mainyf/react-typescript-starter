import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './libs/particles/particles';
import '@styles/normalize.css';
import '@styles/_global.scss';
import 'antd/dist/antd.css';
// import './libs/nprogress/nprogress';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

// window.addEventListener('message', () => {
//     if (process.env.NODE_ENV !== 'production') {
//         console.clear();
//     }
// });

import * as React from 'react';
import { Provider } from 'mobx-react';
import Routers from './routes';
import * as provider from './provider';
import './styles/normalize.css';

class App extends React.Component {
    public render() {
        console.log({...provider});
        return (
            <div>
                <Provider {...provider}>
                    <Routers/>
                </Provider>
            </div>
        );
    }
}

export default App;

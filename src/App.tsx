import * as React from 'react';
import { Provider } from 'react-redux';
import Routers from './routes';
import configure from './store/configureStore';
import './styles/normalize.css';


const store = configure({});

class App extends React.Component {
    public render() {
        return (
            <div>
                <Provider store={store}>
                    <Routers />
                </Provider>
            </div>
        );
    }
}

export default App;

import * as React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Home extends React.Component<any, {}> {
    public render() {
        return (
            <div>
                <h1>Hello world.</h1>
                <h3>{ this.props.store.Demo.message }</h3>
            </div>
        );
    }
}

export default Home;

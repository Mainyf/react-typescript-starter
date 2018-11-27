import * as React from 'react';
import './header.scss';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {

    public render() {
        return (
            <header className="navbar">
                <AppBar
                    className="appBar"
                    title={<span className="text">UMIZ 社区</span>}
                    titleStyle={{
                        "color": "#000"
                    }}
                    style={{
                        "background": "#fff"
                    }}
                    iconStyleLeft={{"display": "none"}}
                    iconStyleRight={{"display": "none"}}
                    zDepth={0}
                />
            </header>
        );
    }
    
}

export default Header;

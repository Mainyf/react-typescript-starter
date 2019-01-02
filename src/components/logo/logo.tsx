import * as React from 'react';
import logo from '@src/images/logo.png';
import './logo.scss';

export default class Logo extends React.Component {
    
    public render() {
        return (
            <div className="header-logo" style={{
                display: 'inline-block',
                color: '#fff'
            }}>
                <img src={logo} />
            </div>
        );
    }
    
}
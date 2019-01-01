import * as React from 'react';
import './logo.scss';

export default class Logo extends React.Component {
    
    public render() {
        return (
            <div className="header-logo" style={{
                display: 'inline-block',
                color: '#fff'
            }}>
                UMIZ
            </div>
        );
    }
    
}
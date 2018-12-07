import * as React from 'react';
import './header.scss';
import { 
    Alert,
    Button
 } from 'react-bootstrap';

class Header extends React.Component {

    public render() {
        return (
            <header className="navbar">
                {
                    [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                        ].map((variant, idx) => (
                        <Alert key={idx} bsStyle={variant}>
                            This is a {variant} alert—check it out!
                        </Alert>
                    ))
                }
                <Button bsStyle="primary">Primary</Button>
            </header>
        );
    }
}

export default Header;

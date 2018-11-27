import * as React from 'react';
import './footer.scss';

class Footer extends React.Component {
    public render() {
        return (
            <footer>
                <div className="copyright">
                    Copyright © 2018 <strong>
                    <a href="/">UMIZ</a></strong>&nbsp; 
                    <strong><a href="/" target="_blank">mcs.umicraft.cn</a></strong>
                    &nbsp;All Rights Reserved.
                </div>
            </footer>
        );
    }
}

export default Footer;
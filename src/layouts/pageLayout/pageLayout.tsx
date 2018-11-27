import * as React from 'react';

class PageLayout extends React.Component {
    
    public render() {
        return (
            <div className="layout">
                {this.props.children}
            </div>
        );
    }
}

export default PageLayout;

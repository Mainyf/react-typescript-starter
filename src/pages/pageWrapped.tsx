import * as React from "react";

export const pageHOC = (WrappedComponent: any) => class WrapperComponent extends React.Component {
    public render() {
        return (<WrappedComponent {...this.props} />);
    }
};

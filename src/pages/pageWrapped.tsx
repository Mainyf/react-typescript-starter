import * as React from "react";
import { IProviderProps, PROVIDERS } from "@src/provider";
import { inject, observer } from "mobx-react";

export const pageHOC = (WrappedComponent: any) => {

    @inject(...PROVIDERS)
    @observer
    class WrapperComponent extends React.Component<IProviderProps, any> {
        
        public componentWillMount() {
            this.props.store!.layoutStore.resetStyles();
        }

        public render() {
            return (<WrappedComponent {...this.props} />);
        }
    }
    return WrapperComponent;
};

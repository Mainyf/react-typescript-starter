import * as React from 'react';
import './pageLayout.scss';
import { observer, inject } from 'mobx-react';
import { IProviderProps, PROVIDERS } from "@src/provider";

@inject(...PROVIDERS)
@observer
class PageLayout extends React.Component<IProviderProps, {}> {
    
    public render() {
        const { layoutStore } = this.props.store!;
        return (
            <div className="layout" style={layoutStore.getStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default PageLayout;

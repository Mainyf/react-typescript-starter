import * as React from 'react';
import './home.scss';
import { renderBannerParticles } from "@src/libs/particles/particles";
import { IProviderProps, PROVIDERS } from "@src/provider";
import { inject, observer } from "mobx-react";

@inject(...PROVIDERS)
@observer
export default class Home extends React.Component<IProviderProps, {}> {
    public render() {
        return (
            <div className="homePage">
                <div className="banner">
                    <div id="particles-js" style={{
                        background: '#1891b6'
                    }}/>
                    <div className="textSection">
                        <div className="title">
                            <span className="left">UMI社区</span>
                            <span className="right">匠心之作</span>
                        </div>
                        <div className="subTitle">
                            <span>
                            感谢您进入UMI社区官方网站.
                        </span>
                            <span>
                            这里将会为您提供全新的MC游戏体验.
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    public componentWillMount() {
        const { layoutStore } = this.props.store!;
        layoutStore.setStyles({
            padding: 0
        });
    }
    
    public componentDidMount() {
        renderBannerParticles('particles-js');
    }
}


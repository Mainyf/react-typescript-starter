import * as React from 'react';
import './home.scss';
import { renderBannerParticles } from "@src/libs/particles/particles";
import { IProviderProps, PROVIDERS } from "@src/provider";
import { inject, observer } from "mobx-react";
import { Motion, spring } from 'react-motion';
import { pageHOC } from "@src/pages/pageWrapped";
import { Icon } from 'antd';
import { Link } from "react-router-dom";

@inject(...PROVIDERS)
@observer
class Home extends React.Component<IProviderProps, any> {

    public render() {
        return (
            <div className="homePage">
                <div className="banner">
                    <div id="particles-js" style={{
                        background: '#14191c'
                    }}/>
                    <div className="textSection">
                        <Motion
                            defaultStyle={{
                                y: 60,
                                opacity: 0
                            }}
                            style={{
                                y: spring(0),
                                opacity: spring(1)
                            }}
                        >
                            {({ y, opacity }) =>
                                <div className="textContent" style={{
                                    transform: `translate3d(0, ${y}px, 0)`,
                                    opacity
                                }}>
                                    <div className="title">
                                        <span className="left">UMI社区</span>
                                        <span className="right">匠心之作</span>
                                    </div>
                                    <div className="subTitle">
                                        <span>感谢您进入UMI社区官方网站.</span>
                                        <span>这里将会为您提供全新的MC游戏体验.</span>
                                    </div>
                                </div>
                            }
                        </Motion>
                        <div className="cardController"/>
                        <div className="controlController">
                            <Motion 
                                defaultStyle={{
                                    x: 200,
                                    opacity: 0
                                }}
                                style={{
                                    x: spring(0),
                                    opacity: spring(1)
                                }}
                            >
                                {({ x, opacity }) =>
                                    <div
                                        className="btnDownload"
                                        style={{
                                            transform: `translate3d(${x}px, 0, 0)`,
                                            opacity
                                        }}
                                    >
                                        <Link to="/download">
                                            <Icon type="download" /> 下载
                                        </Link>
                                    </div>
                                }
                            </Motion>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public componentWillMount() {
        const { layoutStore } = this.props.store!;
        layoutStore.setStyles({
            padding: 0,
            margin: 0
        });
    }

    public componentDidMount() {
        renderBannerParticles('particles-js');
    }
}

export default pageHOC(Home);
import * as React from 'react';
import './header.scss';
import {
    Navbar,
    Button,
    Alignment,
    IconName
} from '@blueprintjs/core';
import classNames from 'classnames';

interface INavItem {
    index: number;
    iconName: IconName;
    value: string;
}

interface InitialState {
    defaultActive: number;
    navList: INavItem[];
}

const initialState: InitialState = {
    defaultActive: 0,
    navList: [
        {
            index: 0,
            iconName: 'home',
            value: '主页'
        },
        {
            index: 1,
            iconName: 'info-sign',
            value: '游戏介绍'
        },
        {
            index: 2,
            iconName: 'path-search',
            value: '卫星地图'
        },
        {
            index: 3,
            iconName: 'people',
            value: '开发团队'
        },
        {
            index: 4,
            iconName: 'user',
            value: '立即注册'
        },
        {
            index: 5,
            iconName: 'download',
            value: '游戏下载'
        }
    ]
};

type State = Readonly<typeof initialState>;

class Header extends React.Component<object, State> {

    public readonly state: State = initialState;

    public toggleNav(navItem: INavItem) {
        this.setState({
            defaultActive: navItem.index
        });
    }

    public getNavList(): JSX.Element {
        return (
            <div>
                {
                    this.state.navList.map(v => {
                        const btnClass = classNames({
                            'bp3-minimal': true,
                            'bp3-large': true,
                            'bp3-active': this.state.defaultActive === v.index
                        });
                        return (
                            <Button 
                                className={btnClass} 
                                key={v.index} 
                                icon={v.iconName} 
                                text={v.value}
                                onClick={() => this.toggleNav(v)}
                            />
                        );
                    })
                }
                {/* <Button className="bp3-minimal bp3-large" icon="home" text="主页" />
                <Button className="bp3-minimal bp3-large" icon="info-sign" text="游戏介绍" />
                <Button className="bp3-minimal bp3-large" icon="path-search" text="卫星地图" />
                <Button className="bp3-minimal bp3-large" icon="people" text="开发团队" />
                <Button className="bp3-minimal bp3-large" icon="user" text="立即注册" />
                <Button className="bp3-minimal bp3-large" icon="download" text="游戏下载" /> */}
            </div>
        );
    }

    public render() {
        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>UMIZ</Navbar.Heading>
                    <Navbar.Divider />
                    {this.getNavList()}
                    {/* <Button className="bp3-minimal bp3-large" icon="home" text="主页" />
                    <Button className="bp3-minimal bp3-large" icon="info-sign" text="游戏介绍" />
                    <Button className="bp3-minimal bp3-large" icon="path-search" text="卫星地图" />
                    <Button className="bp3-minimal bp3-large" icon="people" text="开发团队" />
                    <Button className="bp3-minimal bp3-large" icon="user" text="立即注册" />
                    <Button className="bp3-minimal bp3-large" icon="download" text="游戏下载" /> */}
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default Header;

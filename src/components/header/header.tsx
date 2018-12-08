import * as React from 'react';
import './header.scss';
import {
    Navbar,
    Button,
    Alignment,
    IconName,
    Icon,
    Intent
} from '@blueprintjs/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';

interface INavItem {
    index: number;
    iconName: IconName;
    value: string;
    link: string;
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
            value: '主页',
            link: '/'
        },
        {
            index: 1,
            iconName: 'info-sign',
            value: '游戏介绍',
            link: ''
        },
        {
            index: 2,
            iconName: 'path-search',
            value: '卫星地图',
            link: ''
        },
        {
            index: 3,
            iconName: 'people',
            value: '开发团队',
            link: ''
        },
        {
            index: 4,
            iconName: 'user',
            value: '立即注册',
            link: ''
        },
        {
            index: 5,
            iconName: 'download',
            value: '游戏下载',
            link: '/download'
        }
    ]
};

type State = Readonly<typeof initialState>;

class Header extends React.Component<object & RouteComponentProps<any>, State> {

    public readonly state: State = initialState;

    public toggleNav(navItem: INavItem) {
        this.setState({
            defaultActive: navItem.index
        });
        if(navItem.link) {
            this.props.history.push(navItem.link);
        }
    }

    public componentWillMount() {
        const pathName = this.props.location.pathname;
        this.state.navList.forEach(v => {
            if(v.link === pathName) {
                this.setState({
                    defaultActive: v.index
                });
                return;
            }
        });
    }

    public getIconElement(item: INavItem): JSX.Element {
        return (
            <Icon
                icon={item.iconName}
                iconSize={Icon.SIZE_STANDARD}
                intent={this.state.defaultActive === item.index ? Intent.SUCCESS : Intent.NONE}
            />
        );
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
                                icon={this.getIconElement(v)}
                                text={v.value}
                                onClick={() => this.toggleNav(v)}
                            />
                        );
                    })
                }
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
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default withRouter(Header);

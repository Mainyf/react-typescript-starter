import * as React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import Logo from "@src/components/logo/logo";
import './header.scss';

const MenuItem = Menu.Item;

interface IMenuItem {
    label: string;
    key: string;
    iconName: string;
    url: string;
}

interface IHeaderState {
    menuItems: IMenuItem[];
    defaultActive: string;
}

const initialState: IHeaderState = {
    menuItems: [
        {
            label: '首页',
            key: 'home',
            url: '/',
            iconName: 'home'
        },
        {
            label: '下载',
            key: 'download',
            url: '/download',
            iconName: 'download'
        }
    ],
    defaultActive: 'home'
};

type State = Readonly<typeof initialState>;

class Header extends React.Component<any, State> {

    public readonly state: State = initialState;

    public render() {
        const menus = this.getMenus();
        return (
            <header>
                <div className="container">
                    <Logo />
                    <Menu
                        className="menu-container"
                        mode="horizontal"
                        selectedKeys={[this.state.defaultActive]}
                    >
                        {menus}
                    </Menu>
                </div>
            </header>
        );
    }

    private getMenus() {
        return this.state.menuItems.map(v => {
            return (
                <MenuItem key={v.key} onClick={() => this.handleClickMenu(v)}> {v.label} </MenuItem>
            );
        });
    }

    private handleClickMenu(item: IMenuItem) {
        this.setState({
            defaultActive: item.key
        });
        this.props.history.push(item.url);
    }
}

export default withRouter(Header);
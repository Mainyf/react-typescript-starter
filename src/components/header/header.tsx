import * as React from 'react';
import { Menu, Icon } from 'antd';
import Logo from "@src/components/logo/logo";
import './header.scss';

const MenuItem = Menu.Item;

interface IMenuItem {
    label: string;
    key: string;
    iconName: string;
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
            iconName: 'home'
        },
        {
            label: '下载',
            key: 'download',
            iconName: 'download'
        }
    ],
    defaultActive: 'home'
};

type State = Readonly<typeof initialState>;

export default class Header extends React.Component<{}, State> {

    public readonly state: State = initialState;

    public render() {
        const menus = this.getMenus();
        return (
            <header className="_header">
                <Logo />
                <Menu
                    className="_menu"
                    mode="horizontal"
                    selectedKeys={[this.state.defaultActive]}
                >
                    {menus}
                </Menu>
            </header>
        );
    }

    private getMenus() {
        return this.state.menuItems.map(v => {
            return (
                <MenuItem key={v.key} onClick={() => this.handleClickMenu(v)}>
                    <Icon type={v.iconName} /> {v.label}
                </MenuItem>
            );
        });
    }

    private handleClickMenu(item: IMenuItem) {
        this.setState({
            defaultActive: item.key
        });
    }

}
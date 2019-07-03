import ArrayMove from 'array-move';
import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react';
import Styled from 'styled-components';
import { SortableContainer } from 'react-sortable-hoc';

import SidebarItem from './sidebar-item/SidebarItem';

import dashboard from '../../assets/images/icons/home.png';
import dashboardActive from '../../assets/images/icons/home_selected.png';
import tv from '../../assets/images/icons/tv.png';
import tvActive from '../../assets/images/icons/tv_selected.png';
import homeMonitoring from '../../assets/images/icons/homeMonitoring.png';
import homeMonitoringActive from '../../assets/images/icons/homeMonitoring_selected.png';
import homePhone from '../../assets/images/icons/homePhone.png';
import homePhoneActive from '../../assets/images/icons/homePhone_selected.png';
import internet from '../../assets/images/icons/internet.png';
import internetActive from '../../assets/images/icons/internet_selected.png';
import wireless from '../../assets/images/icons/wireless.png';
import wirelessActive from '../../assets/images/icons/wireless_selected.png';

const SidebarNav = Styled(Nav)`
    flex-direction: column;
    min-width: 225px;
    width: 225px;
`;

const SortableList = SortableContainer(({children}) => children);

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 'dashboard',
                    icon: dashboard,
                    iconActive: dashboardActive,
                    label: 'Dashboard',
                },
                {
                    id: 'digital-tv',
                    icon: tv,
                    iconActive: tvActive,
                    label: 'Digital TV',
                },
                {
                    id: 'home-monitoring',
                    icon: homeMonitoring,
                    iconActive: homeMonitoringActive,
                    label: 'Home Monitoring',
                },
                {
                    id: 'home-phone',
                    icon: homePhone,
                    iconActive: homePhoneActive,
                    label: 'Home Phone',
                },
                {
                    id: 'ignite-tv',
                    icon: tv,
                    iconActive: tvActive,
                    label: 'Ignite TV',
                },
                {
                    id: 'internet',
                    icon: internet,
                    iconActive: internetActive,
                    label: 'Internet',  
                },
                {
                    id: 'wireless',
                    icon: wireless,
                    iconActive: wirelessActive,
                    label: 'Wireless',
                }
            ]
        };         
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: ArrayMove(items, oldIndex, newIndex)
        }));
    }

    render() {
        return (
            <SortableList onSortEnd={this.onSortEnd}>
                <SidebarNav>
                    {this.state.items.map((item, index) => <SidebarItem key={item.id} index={index} icon={item.icon} iconActive={item.iconActive} label={item.label} /> )}
                </SidebarNav>
            </SortableList>
        );
    }
}

export default Sidebar;
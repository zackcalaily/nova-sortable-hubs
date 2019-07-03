import ArrayMove from 'array-move';
import React, { Component } from 'react';
import Styled from 'styled-components';
import { SortableContainer } from 'react-sortable-hoc';

import Subhub from './subhub/Subhub';

const HubsArea = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const SortableList = SortableContainer(({children}) => children);

class Hubs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 'digital-tv',
                    label: 'Digital TV',
                    links: [
                        'Activate or Migrate an Account',
                        'Billing & Online Billing',
                        'Channel Lineups',
                        'Installation & Technician Appointments',
                        'Offers',
                        'Packages & Value Added Services',                        
                    ]
                },
                {
                    id: 'home-monitoring',
                    label: 'Home Monitoring',
                    links: [
                        'Appointments, Tickets & Outages',
                        'Change Account Info',
                        'Move Requests',
                        'Packages',
                        'Prices & Specs',
                        'Troubleshoot Equipment',                        
                    ]
                },
                {
                    id: 'home-phone',
                    label: 'Home Phone',
                    links: [
                        'Add-Ons',
                        'Cancel, Move or Suspend Service',
                        'Change Account Info',
                        'Offers',
                        'Plans',
                        'Returns & Exchanges',                        
                    ]
                },
                {
                    id: 'ignite-tv',
                    label: 'Ignite TV',
                    links: [
                        'Activate or Migrate an Account',
                        'Add or Remove Content',
                        'Channel Lineups & Exchanges',
                        'Features & Apps',
                        'Offers',
                        'Packages',                        
                    ]
                },
                {
                    id: 'wireless',
                    label: 'Wireless',
                    links: [
                        'Activate Account or Add-a-Line',
                        'Add-ons & Value Packs',
                        'Change Plan',
                        'Charges & Credits',
                        'Data Add-ons',
                        'Offers - Postpaid',                        
                    ]
                },
                {
                    id: 'internet',
                    label: 'Internet',
                    links: [
                        'Activate an Account',
                        'Change Package',
                        'Installations & Technician Appointments',
                        'Offers',
                        'Packages & Add-ons',
                        'Self-Installation, Modem & Wi-Fi Setup',                        
                    ]
                }
            ]
        }
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: ArrayMove(items, oldIndex, newIndex)
        }));
    }

    
    render() {
        return (
            <SortableList axis={'xy'} onSortEnd={this.onSortEnd}>
                <HubsArea>
                   {this.state.items.map((subhub, index) => <Subhub key={subhub.id} index={index} label={subhub.label} links={subhub.links} />)}
                </HubsArea>
            </SortableList>           
        );
    }
}

export default Hubs;
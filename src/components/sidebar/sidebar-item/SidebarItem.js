import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react';
import Styled from 'styled-components';
import { SortableElement } from 'react-sortable-hoc';

const Link = Styled(Nav.Link)`
    align-items: center;    
    background-color: #f6f7f9;
    color: #696969;
    display: flex;
    margin-bottom: 2px;
    min-width: 225px;
    min-height: 60px;
    padding-left: 16px;
    padding-top: 20px;

    :hover {
        background-color: #da291c;
        color: #fff;
    }

    > * {
        pointer-events: none;
    }
`;

const Icon = Styled.div`
    width: 30px;
    text-align: center;
`;

const Label = Styled.span`
    margin-left: 20px;
`;

const SortableItem = SortableElement(({icon, label, onMouseEnter, onMouseOut}) => (
    <Nav.Item>
        <Link href="#" onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
            <Icon><img src={icon} width="30" height="30" alt={label} /></Icon>
            <Label>{label}</Label>
        </Link>
    </Nav.Item>
))

class SidebarItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: props.icon,
        }
    }

    activateIcon = () => {
        this.setState({ icon: this.props.iconActive });
    }

    deactivateIcon = () => {
        this.setState({ icon: this.props.icon });
    }

    render() {
        return (
            <SortableItem icon={this.state.icon} label={this.props.label} index={this.props.index} onMouseEnter={this.activateIcon} onMouseOut={this.deactivateIcon} />
        );
    }
}

export default SidebarItem;

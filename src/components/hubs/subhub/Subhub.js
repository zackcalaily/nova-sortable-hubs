import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import Styled from 'styled-components';
import { SortableElement } from 'react-sortable-hoc';

const SubhubContainer = Styled(Card)`
    background-color: #fff;    
    border-radius: 0;
    border-top: 0.1875rem solid #da291c;
    border-width: 0.02rem;
    box-shadow: 0.01875rem 0.05625rem 0.18125rem 0.025rem rgba(0,0,0,.15);
    margin: 15px;
    width: 30%;
    height: 275px;
    flex-grow: 1;
`;

const SubhubTitle = Styled(Card.Title)`
    font-weight: 600;
`;

const Links = Styled.ul`
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
`;

const Link = Styled.li`
    padding-top: 0.75rem;
    line-height: 1.2;

    a {
        align-items: center;
        color: #085498;
        display: flex;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;        
    }

    a:after {
        font-family: 'FontAwesome';
        font-weight: normal;
        font-size: .75rem;
        content: '\f054';
        margin-left: 8px;    
    }
`;

const SortableItem = SortableElement(({label, links}) => (
    <SubhubContainer>
        <Card.Body>
            <SubhubTitle>{label}</SubhubTitle>
            <Links>
                {
                    links.map((link, index) => (
                        <Link key={`link-${index}`}>
                            <a href="#">{link}</a>
                        </Link>
                    ))
                }
            </Links>
        </Card.Body>
    </SubhubContainer>
))

class Subhub extends Component {
    render() {
        return (
            <SortableItem label={this.props.label} links={this.props.links} index={this.props.index} />
        );
    }
}

export default Subhub;
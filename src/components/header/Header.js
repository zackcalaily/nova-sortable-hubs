import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import Styled from 'styled-components';

import logo from '../../assets/images/logo.png';
import mobius from '../../assets/images/mobius.svg';

const Container = Styled.header`
    background-image: url(${mobius});
    background-repeat: no-repeat;
    background-size: 78px 72px;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    min-height: 72px;
    padding-left: 80px;
    padding-right: 20px;
    position: relative;
    z-index: 2;
`;

class Header extends Component {
    render() {
        return (
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand><img src={logo} alt="Nova" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <InputGroup>
                            <FormControl placeholder="Search for specific terms, questions, Document IDs, etc..." />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">
                                    <i className="fa fa-search" />
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import Styled from 'styled-components';

import Header from '../header/Header';
import Hubs from '../hubs/Hubs';
import Sidebar from '../sidebar/Sidebar';

const Wrapper = Styled.div``;

const PageWrapper = Styled.div`
    display: flex;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                
                <PageWrapper>
                    <Sidebar />
                    <Hubs />
                </PageWrapper>
            </Wrapper>     
        );
    }
}

export default App;
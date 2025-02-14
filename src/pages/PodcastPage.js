import React from 'react';
import Articles from './ArticlesPage'
import styled from 'styled-components';
import IntroPage from './IntroPage.js';
import StaffPage from './StaffPage.js';

import { podcast_articles } from '../data/podcast';


const PageWrapper = styled.div`
background-color: #1F2925;
width: 100%;
min-height: 100vh;
`;

const Container = styled.div`
align-items: center;
justify-content: center;
margin: 80px auto;
`;


const PodcastPage = () => {
    return (
        <div>
            <PageWrapper>
                <IntroPage></IntroPage>
                    <Container>
                <Articles articles={podcast_articles} />
                </Container>
                <StaffPage></StaffPage>
            </PageWrapper>
        </div>
        );
    };
    
export default PodcastPage;
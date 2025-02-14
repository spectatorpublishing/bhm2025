import React from 'react';
import Articles from './ArticlesPage'
import styled from 'styled-components';
import IntroPage from './IntroPage.js';
import StaffPage from './StaffPage.js';

import { spectrum_articles } from '../data/spectrumarticles.js';



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


const SpectrumPage = () => {
return (


<div>
    <PageWrapper>
        <IntroPage></IntroPage>
            <Container>
            <Articles articles={spectrum_articles} />
        </Container>
        <StaffPage></StaffPage>
    </PageWrapper>
</div>


);
};


export default SpectrumPage;
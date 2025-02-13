import React from 'react';
import NavBar from '../components/NavBar.js';
import Articles from '../components/Articles.js'
import styled from 'styled-components';


import IntroPage from './IntroPage.js';
import StaffPage from './StaffPage.js';



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
    <p>THIS IS THE SPECTRUM PAGE</p>
    <PageWrapper>
        <IntroPage></IntroPage>
            <Container>
            <NavBar></NavBar>




            {/* HERE IS WHERE WE WOULD USE A MAP FUNCTION */}
            <Articles></Articles>








        </Container>
        <StaffPage></StaffPage>
    </PageWrapper>
</div>


);
};


export default SpectrumPage;
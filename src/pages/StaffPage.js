import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits';

const Container = styled.div`
    margin-top: 4rem;
    z-index: 5;
    color: white;
    background-color: #141715;
    padding: 2rem 2rem 0rem 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 76px;
    margin-right: 76px;
    @media only screen and (max-width: 768px) {
        padding: 1rem 1rem 0rem 1rem;
        margin-left: 24px;
        margin-right: 24px;
    }
    border-radius: 10px;
`;

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    color: white;
    width: 80%;
    margin-bottom: 35px;
`;


const Header = styled.h1`
    z-index: 10;
    width: 80%;
    font-size: 37px;
    font-family: 'Lusitana';
    font-weight: 400;
    font-style: normal;
    line-height: 2.5rem;
    text-align: center;
    
    @media only screen and (max-width: 768px) {
        font-size: 24px;
        padding: 0; 
        width: 100%;
        line-height: 2rem;
    }
`;

const SectAndNames = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;
    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Section = styled.div`
    z-index: 5;
    font-size: 1.8rem;
    font-weight: 400;
    width: auto;
    height: fit-content;
    margin-bottom: 2rem;
    font-family: 'Lusitana';
    @media only screen and (max-width: 1216px) {
        font-size: 1.6rem;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 768px) {
        font-size: 20px;
        text-align: center;
    }
`;

const Name = styled.div`
    z-index: 5;
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 1216px) {
        font-size: 1rem;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 0.9rem;
    }
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const StaffPage = () => {
    return (
        <Container id="credits">
            <HeaderDiv>
                <Header>The Staff Who Made This Issue Possible</Header>
            </HeaderDiv>
            <SectAndNames>
                {Object.entries(credits).map(([section, key]) => (
                    <Section key={section}>
                        {section}
                        <br />
                        {key.map((person, index) => (
                            <Name key={index}>{person.staff_name}, {person.title}</Name>
                        ))}
                        <br />
                    </Section>
                ))}
            </SectAndNames>
        </Container>
    );
};

export default StaffPage;

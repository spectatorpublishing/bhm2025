import React from 'react';
import NavBar from '../components/NavBar';
import YellowArticle from '../components/YellowArticle';
import GreenArticle from '../components/GreenArticle';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: flex-start;
  margin: 69px auto 130px auto;

  @media (max-width: 768px) {
      flex-direction: column;
  }
`;

const ArticlesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: flex-start;
    max-width: 95%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const NUM_ARTICLES = 9;

const ArticlesPage = () => {
    const articles = Array.from({ length: NUM_ARTICLES }, (_, index) =>
        index % 2 === 0 ? <YellowArticle key={index} /> : <GreenArticle key={index} />
    );

    return (
        <Container>
            <NavBar />
            <ArticlesWrapper>{articles}</ArticlesWrapper>
        </Container>
    );
};

export default ArticlesPage;

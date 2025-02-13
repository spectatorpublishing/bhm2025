import React from 'react';
import NavBar from '../components/NavBar';
import Articles from '../components/Articles.js'
import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    justify-content: center;
    margin: 80px auto;
`;

const ArticlesPage = () => {
    return (
      <Container>
        <NavBar></NavBar>
        <Articles></Articles>
      </Container>
      
    );
  };
  
  export default ArticlesPage;
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
      align-items: center;
      padding: 0;
      margin: 0;
  }
`;

const NoArticles = styled.div`
  font-size: 18px;
  justify-content: center;
  text-align: center;
  color: #fff; 
  font-family: Lusitana;
  width: 100%;
  height: auto;
`;

const ArticlesPage = ({ articles = [] }) => {  
    return (
        <Container>
            <NavBar />
            
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        index % 2 === 0 ? (
                            <YellowArticle 
                                key={index} 
                                imageUrl={article.image_url} 
                                title={article.article_title} 
                                author={article.article_authors} 
                                link={article.article_link} 
                            />
                        ) : (
                            <GreenArticle 
                                key={index} 
                                imageUrl={article.image_url} 
                                title={article.article_title} 
                                author={article.article_authors} 
                                link={article.article_link} 
                            />
                        )
                    ))
                ) : (
                    <NoArticles>No articles available</NoArticles> 
                )}
            
        </Container>
    );
};

export default ArticlesPage;


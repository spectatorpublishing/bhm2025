OLD ARTICLE GRID STUFF

```
import React from "react";
import styled from "styled-components";

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ArticleContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
`;

const ArticlePlaceholder = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    position: relative;
    z-index: 0;
    background: rgba(255, 255, 204, 0.5) /* 50% opacity */
`;


const articles = new Array(6).fill("/articlePlaceHolder.png");

const GreenArticle = () => {
    return (
        <Grid>
            {articles.map((src, index) => (
                <ArticleContainer key={index}>
                    {/* Article Image */}
                    <ArticlePlaceholder src={src} alt={`Article ${index + 1}`} />
                </ArticleContainer>
            ))}
        </Grid>
    );
};

export default GreenArticle;

```

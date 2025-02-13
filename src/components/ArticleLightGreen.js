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


const SVGCorner = styled.div`
    position: absolute;
    width: 77px;
    height: 70px;
    z-index: 2;
`;

const SVGTopLeft = styled(SVGCorner)`
    top: 0;
    left: 0;
`;

const SVGTopRight = styled(SVGCorner)`
    top: 0;
    right: 0;
`;

const SVGBottomLeft = styled(SVGCorner)`
    bottom: 0;
    left: 0;
`;

const SVGBottomRight = styled(SVGCorner)`
    bottom: 0;
    right: 0;
`;

const articles = new Array(6).fill("/articlePlaceHolder.png");

const ArticleGrey = () => {
    return (
        <Grid>
            {articles.map((src, index) => (
                <ArticleContainer key={index}>
                    {/* Article Image */}
                    <ArticlePlaceholder src={src} alt={`Article ${index + 1}`} />

                    {/* SVG Corner Decorations */}
                    <SVGTopLeft>
                        <svg xmlns="http://www.w3.org/2000/svg" width="77" height="70" viewBox="0 0 77 70" fill="none">
                            <path d="M0 0H77L0 70V0Z" fill="#B4BF83"/>
                        </svg>
                    </SVGTopLeft>

                    <SVGTopRight>
                        <svg xmlns="http://www.w3.org/2000/svg" width="77" height="70" viewBox="0 0 77 70" fill="none">
                            <path d="M77 0H0L77 70V0Z" fill="#546C4D"/>
                        </svg>
                    </SVGTopRight>

                    <SVGBottomLeft>
                        <svg xmlns="http://www.w3.org/2000/svg" width="77" height="70" viewBox="0 0 77 70" fill="none">
                            <path d="M0 70H77L0 0V70Z" fill="#546C4D"/>
                        </svg>
                    </SVGBottomLeft>

                    <SVGBottomRight>
                        <svg xmlns="http://www.w3.org/2000/svg" width="77" height="70" viewBox="0 0 77 70" fill="none">
                            <path d="M77 70H0L77 0V70Z" fill="#B4BF83"/>
                        </svg>
                    </SVGBottomRight>
                </ArticleContainer>
            ))}
        </Grid>
    );
};

export default ArticleGrey;

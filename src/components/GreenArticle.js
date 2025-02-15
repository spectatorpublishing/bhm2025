import React from "react";
import styled from "styled-components";

const ArticleLinkContainer = styled.a`
  position: relative;
  width: 100%;
  max-width: 400px;
  display: block; 
  text-decoration: none; /
  color: inherit; 
  
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const ArticlePlaceholder = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  background: rgba(216, 221, 191, 0.9);
`;

const ArticleImage = styled.img`
  position: absolute;
  top: 34%;
  left: 50%;
  width: 198px;
  height: 198px;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 3;

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
  @media (max-width: 375px) {
    width: 130px;
    height: 130px;
  }
`;

const ArticleVideo = styled.iframe`
  position: absolute;
  top: 34%;
  left: 50%;
  width: 198px;
  height: 198px;
  transform: translate(-50%, -50%);
  z-index: 3;

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
  @media (max-width: 375px) {
    width: 130px;
    height: 130px;
  }
`;

const ArticleTextWrapper = styled.div`
  position: absolute;
  top: 66%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 3;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    top: 63%;
  }
`;

const ArticleTitle = styled.div`
  color: #000;
  font-family: Lusitana;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 390px) {
    font-size: 12px;
  }
`;

const ArticleAuthor = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #000;
  font-family: Lusitana;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 10px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
    margin-top: 15px;
  }
`;

const SVGCorner = styled.div`
  position: absolute;
  width: 80px; 
  height: 80px;
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

/* ---------- Helper Functions ---------- */
function isYouTubeUrl(url) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function getEmbedUrl(url) {
  if (url.includes("youtu.be")) {
    // e.g. "https://youtu.be/VIDEO_ID" => "https://www.youtube.com/embed/VIDEO_ID"
    return url.replace("youtu.be/", "youtube.com/embed/");
  }
  // e.g. "https://www.youtube.com/watch?v=VIDEO_ID" => "https://www.youtube.com/embed/VIDEO_ID"
  return url.replace("watch?v=", "embed/");
}

const YellowArticle = ({ imageUrl, title, author, link }) => {
  const youtubeLink = isYouTubeUrl(imageUrl);
  const embedUrl = youtubeLink ? getEmbedUrl(imageUrl) : null;

  return (
    <ArticleLinkContainer
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Placeholder background (always) */}
      <ArticlePlaceholder 
        src="/articlePlaceholder.png"
        alt="Article Placeholder"
      />

      {/* Conditionally render video or image in same spot */}
      {youtubeLink ? (
        <ArticleVideo
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      ) : (
        <ArticleImage src={imageUrl} alt={title} />
      )}

      {/* Text Overlay */}
      <ArticleTextWrapper>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleAuthor>By: {author}</ArticleAuthor>
      </ArticleTextWrapper>

      {/* SVG Corners */}
      <SVGTopLeft>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <polygon points="0,0 80,0 0,80" fill="#B4BF83"/>
        </svg>
      </SVGTopLeft>

      <SVGTopRight>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <polygon points="80,0 0,0 80,80" fill="#546C4D"/>
        </svg>
      </SVGTopRight>

      <SVGBottomLeft>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <polygon points="0,80 80,80 0,0" fill="#546C4D"/>
        </svg>
      </SVGBottomLeft>

      <SVGBottomRight>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <polygon points="80,80 0,80 80,0" fill="#B4BF83"/>
        </svg>
      </SVGBottomRight>
    </ArticleLinkContainer>
  );
};

export default YellowArticle;

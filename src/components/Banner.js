import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 118px;
  padding: 24px 38px;
  align-items: center;
  flex-shrink: 0;
  background: #141715;
  box-sizing: border-box;
`;

const Circle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #3c4b30;
  border: 1px solid white;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

const Banner = () => {
  return (
    <Container>
      <Circle href="https://www.columbiaspectator.com/" target="_blank" rel="noopener noreferrer">
        <Logo src="CDSlogo.png" alt="Logo" />
      </Circle>
    </Container>
  );
};

export default Banner;

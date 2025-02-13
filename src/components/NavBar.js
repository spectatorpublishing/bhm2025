import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #141715;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto 50px auto; //38px from the image, 38px from the staff
  padding: 20px 40px;
`;

const NavItem = styled.div`
  color: #ffffff;
  font-family: 'Lusitana';
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  position: relative;

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #d6c26b;
    border-radius: 2px;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <NavItem>University</NavItem>
      <NavItem>City</NavItem>
      <NavItem>Opinion</NavItem>
      <NavItem>A&C</NavItem>
      <NavItem>Sports</NavItem>
      <NavItem>Spectrum</NavItem>
      <NavItem>Podcast</NavItem>
    </Container>
  );
};

export default NavBar;

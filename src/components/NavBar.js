import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #141715;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto 50px auto;
  padding: 20px 40px;
`;

const NavItem = styled.div`
  color: #ffffff;
  font-family: 'Lusitana';
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  text-decoration: none;

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

  &.active::after {
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
      <NavItem as={NavLink} to="/" end>
        University
      </NavItem>
      <NavItem as={NavLink} to="/city">
        City
      </NavItem>
      <NavItem as={NavLink} to="/opinion">
        Opinion
      </NavItem>
      <NavItem as={NavLink} to="/ac">
        A&C
      </NavItem>
      <NavItem as={NavLink} to="/sports">
        Sports
      </NavItem>
      <NavItem as={NavLink} to="/spectrum">
        Spectrum
      </NavItem>
      <NavItem as={NavLink} to="/podcast">
        Podcast
      </NavItem>
    </Container>
  );
};

export default NavBar;

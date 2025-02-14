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
  padding: 20px 40px;
  margin: 0 auto 25px auto;

  @media (max-width: 768px) {
    padding: 0;
    align-items: center;
    width: 70%;
    align-items: center;
    padding: 10px 40px;
    // padding-top: 10px;
    // padding-bottom: 10px;
    border-radius: 10px;
  }
`;

const NavItem = styled.div`
  color: #ffffff;
  font-family: 'Lusitana';
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #d6c26b;
    border-radius: 2px;

    @media (max-width: 768px) {
      height: 1.5px;
      bottom: -3px;
    }
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

    @media (max-width: 768px) {
      height: 1.5px;
      bottom: -3px;
    }
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
      <NavItem as={NavLink} to="/ac">
        A&C
      </NavItem>
      <NavItem as={NavLink} to="/sports">
        Sports
      </NavItem>
      <NavItem as={NavLink} to="/spectrum">
        Spectrum
      </NavItem>
    </Container>
  );
};

export default NavBar;

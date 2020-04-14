import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "components/Logo";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  color:  #606A5F;
  margin-block-start: 0;
  margin-block-end: 0;
  list-style-type: none;

  a {
    text-decoration: none;
  }

  li:last-child {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    width: 300px;
    margin: -100px 0 0 400px;
    padding: 50px;
    padding-top: 125px;
    background: rgba(76, 82, 84, 0.9);
    transform-origin: 0% 100%;
    transform: none;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  @media only screen and (max-width: 480px) {
    width: 260px;
  }

  @media only screen and (max-width: 320px) {
    width: 230px;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Lato', sans-serif;
  display: flex;
  height: 2.5rem;
  margin: 0 1.5rem;
  padding-top: 1.5rem;
  font-weight: bold;
  color:  #4C5254;

  :hover {
    color: #C3745C;
  }
`;

const MenuToggle = styled.div`

  @media only screen and (max-width: 768px) {
    position: relative;
    top: 30px;   
    z-index: 1;
    user-select: none;

    span {
      display: block;
      width: 33px;
      height: 6px;
      top: -15px;
      left: -60px;
      background: #4C5254;
      margin-bottom: 5px;
      position: relative;
      border-radius: 3px;
      z-index: 1;
      transform-origin: 0px 0px;
  
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
    }

    span:first-child {
      transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    span {
      top: -10px;
      left: -30px;
    }
  }

  @media only screen and (max-width: 480px) {
    span {
      top: -15px;
      left: -35px;
    }
  }

  @media only screen and (max-width: 320px) {
    span {
      top: -15px;
      left: -20px;
    }
  }
`;

const Checkbox = styled.input`
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -20px;
  left: -70px;
  cursor: pointer;
  opacity: 0; 
  z-index: 2;

  :checked ~ ${StyledUl} {
    transform: translate(-190%,0);

    ${StyledLink} {
      color: #fff;
    }

    ${StyledLink}:hover {
      color: #C3745C;
    }
  }

  :checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(1px, 0px);
    background: #fff;
  }

  :checked ~ span:nth-last-child(3){
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  :checked ~ span:nth-last-child(2){
    transform: rotate(-45deg) translate(0, 0px);
  }

  @media only screen and (max-width: 768px) {
    left: -35px;
  }

  @media only screen and (max-width: 480px) {
    left: -45px;
  }

  @media only screen and (max-width: 320px) {
    left: -25px;
  }
`;


const Nav = () => (
  <NavContainer>
    <Logo>TripTo</Logo>
    <MenuToggle>
      <Checkbox  type="checkbox"></Checkbox>
      <span></span>
      <span></span>
      <span></span>
      <StyledUl>
          <li>
            <StyledLink to="/">Główna</StyledLink>
          </li>
          <li>
            <StyledLink to="/map">Mapa</StyledLink>
          </li>
          <li>
            <StyledLink to="/restaurants">Restauracje</StyledLink>
          </li>
      </StyledUl>
    </MenuToggle>
  </NavContainer>
);

export default Nav;

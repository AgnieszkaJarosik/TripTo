import React, {useRef} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "components/Logo";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 2;
  transition: all 5s;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const MenuToggle = styled.div`
  @media only screen and (max-width: 768px) {
    position: relative;
    top: -3rem;   
    z-index: 1;
    user-select: none;
  }
`;

const SpanContainer = styled.div`
  position: absolute;
  top: .5rem;
  right: .5rem;
  visibility: hidden;

  span {
    position: relative;
    display: block;
    width: 33px;
    height: 6px;
    background: #4C5254;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 2;
    transform-origin: 0px 0px;
  
      transition: transform .5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
              
  }

    span:first-child {
      transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    @media only screen and (max-width: 768px) {
      visibility: visible;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  color:  #606A5F;
  list-style-type: none;
  width: 100%;
  transition: all 0.3s ease;

  li:last-child {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 0;
    visibility: visible;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  color:  #4C5254;
  padding: 1.2rem;
  transition: visibility 0.1s;

  :hover {
    color: #C3745C;
  }

  @media only screen and (max-width: 768px) {
    display: inline-block;
    position: relative;
    color: #4C5254;
    font-size: 1.5rem;
    overflow: hidden;
    top: 5px;
    visibility: hidden; 
  }
`;

const Checkbox = styled.input`
  width: 40px;
  height: 40px;
  position: absolute;
  top: .5rem;
  right: .5rem;
  cursor: pointer;
  display: none; 
  z-index: 3;

  :checked ~ ${StyledUl} {
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    height: 100vh;
    

    ${StyledLink} {
      width: 100%;
      visibility: visible;
    }

    ${StyledLink}:hover {
      color: #C3745C; 
    }
  }

  :checked ~ ${SpanContainer} {
    span {
      opacity: 1;
      transform: rotate(-45deg) translate(-2.5px, -1px);
    }
  }

  :checked ~ ${SpanContainer} {
    span:nth-last-child(3){
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
  }

  :checked ~ ${SpanContainer}{
  span:nth-last-child(2){
    transform: rotate(45deg) translate(-10px,-7px);
  }
}

@media only screen and (max-width: 768px) {
      display: block;
      opacity: 0;
  }
`;


const Nav = () => {
  const checkboxRef = useRef();

  return (
    <NavContainer>
      <LogoLink to="/"><Logo>TripTo</Logo></LogoLink>
      <MenuToggle>
        <Checkbox  type="checkbox" ref={checkboxRef}></Checkbox>
        <SpanContainer>
          <span></span>
          <span></span>
          <span></span>
        </SpanContainer>
        <StyledUl>
          <li>
            <StyledLink to="/" onClick={()=>checkboxRef.current.checked=false}>Nowa podróż</StyledLink>
          </li>
          <li>
            <StyledLink to="/map" onClick={()=>checkboxRef.current.checked=false}>Mapa</StyledLink>
          </li>
          <li>
            <StyledLink to="/restaurants" onClick={()=>checkboxRef.current.checked=false}>Restauracje</StyledLink>
          </li>
          <li>
            <StyledLink to="/sights" onClick={()=>checkboxRef.current.checked=false}>Atrakcje</StyledLink>
          </li>
          <li>
            <StyledLink to="/place" onClick={()=>checkboxRef.current.checked=false}>Miejsce</StyledLink>
          </li>
        </StyledUl>
      </MenuToggle>
    </NavContainer>
  )
}

export default Nav;

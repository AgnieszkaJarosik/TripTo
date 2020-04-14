import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Button from "components/Button";
import InputPlus from "components/InputPlus";
import img from "images/2.png";
import imgSmall from "images/1.png";

const HomePageContainer = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-positon: center;
  background-size: cover;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  @media only screen and (max-width: 768px) {
    background-image: url(${imgSmall});
  }

  @media only screen and (max-width: 480px) {
    background-image: none;
  }
`;

const InputsContainer = styled.div`
  background-color: rgb(76, 82, 84, 0.8);
  padding: 3rem;
  display: flex;
  border-radius: 3px; 
  transition: all 0.2s;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    background-color: rgb(76, 82, 84, 1);
    height: 25rem;
    width: 100%;
  }

`;

const HomePage = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  
  return (
    <HomePageContainer>
          <InputsContainer>
            <InputPlus name="start" placeholder="Skąd"
                onChange={ (value) => setStart(value) }/>
            <InputPlus name="end" placeholder="Dokąd"
                onChange={ (value) => setEnd(value) }/>
            <Link to={{ pathname:"/map", params: {start: start, end: end} }} >
              <Button>Wyszukaj</Button>
            </Link>
          </InputsContainer>
    </HomePageContainer>
  );
}
export default HomePage;
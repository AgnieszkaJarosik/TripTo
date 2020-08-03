import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Prompt } from "react-router-dom";
import styled from 'styled-components';

import { saveInput, deleteInput } from "actions/trip";
import { deletePlaces } from "../actions/places";

import Button from "components/Button";
import InputPlus from "components/InputPlus";
import img from "images/2.png";
import imgSmall from "images/1.png";

const HomePageContainer = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
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
    background-color: #4C5254;
  }
`;

const Form = styled.form`
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
    height: 24.5rem;
    width: 100%;
  }

`;

const HomePage = () => {
  const [tour, setTour] = useState({start: "", end: ""});
  const [isBlocking, setIsBlocking] = useState(true);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(deleteInput());
    dispatch(deletePlaces());
  }, [])

  return (
    <HomePageContainer>
        <Form
            autocomplete="off"
            onSubmit={(event) => {
              event.preventDefault();
              event.target.reset();
              dispatch(saveInput(tour));
            }}
        >
            <InputPlus name="start" placeholder="Skąd" value={tour.start}
                onChange={ (value) => setTour({ start: value, end: tour.end}) }/>
            <InputPlus name="end" placeholder="Dokąd" value={tour.end}
                onChange={ (value) => {
                  setTour({ start: tour.start, end: value});
                  setIsBlocking(value.length <= 0);
                }}
              />
            <Link to="/map" >
              <Button onClick={() => dispatch(saveInput(tour))}>Wyszukaj</Button>
            </Link>
            <Prompt
              when={isBlocking}
              message="Ustaw miejsce docelowe podróży"
            />
        </Form>
    </HomePageContainer>
  );
}

export default HomePage;

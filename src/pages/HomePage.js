import React, { useState, useEffect } from "react";
import { Link, Prompt } from "react-router-dom";
import styled from 'styled-components';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as inputActions from "redux/actions/inputActions";
import * as checkboxActions from "redux/actions/checkboxActions";
import * as placesActions from "redux/actions/placesActions";

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

const HomePage = (props) => {
  const [tour, setTour] = useState({start: null, end: null});
  const [isBlocking, setIsBlocking] = useState(true);

  useEffect( () => {
    props.deletePlaces();
    props.deleteInput();
    props.resetCheckboxes();
  }, [])
  
  return (
    <HomePageContainer>
        <Form 
            onSubmit={(event) => {
              event.preventDefault();
              event.target.reset();
              props.actions.saveInput(tour);
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
              <Button onClick={() => props.saveInput(tour)}>Wyszukaj</Button>
            </Link>
            <Prompt
              when={isBlocking}
              message="Czy chcesz opuścić stronę bez miejsce docelowego podróży"
            />
        </Form>
    </HomePageContainer>
  );
}

function mapSateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
  return {
    saveInput: bindActionCreators(inputActions.saveInput, dispatch),
    deleteInput: bindActionCreators(inputActions.deleteInput, dispatch),
    resetCheckboxes: bindActionCreators(checkboxActions.resetCheckboxes, dispatch),
    deletePlaces: bindActionCreators(placesActions.deletePlaces, dispatch)
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(HomePage);
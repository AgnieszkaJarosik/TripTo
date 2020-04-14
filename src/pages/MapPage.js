import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';

import InputPlus from "components/InputPlus";
import Button from "components/Button";
import Fetch from "services/Fetch";
import Directions from "services/Directions";
import Map from "components/Map";

const MapPageContainer = styled.div`
  display: flex;
  height: 500px;

  span {
    position: absolute;
    color: transparent;
    transition: transform 0.5s ease-in-out;
  }


  @media only screen and (max-width: 768px) {
    display: block;

    span {
      font-size: 1.2rem;
      font-weight: 700;
      color: #4C5254;
      padding: 1rem;
      z-index: 2;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  
`;

const InputsContainer = styled.div`
  width:20%;
  background-color: rgb(76, 82, 84, 0.8);
  padding: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  ~ button {
    padding-left: 1rem;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    transform: translate(-100%, 0);
  }
  
`;

const Checkbox = styled.input`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 3;
  opacity: 0;

  @media only screen and (max-width: 768px) {
    cursor: pointer;

    :checked ~${InputsContainer} {
      transform: translate(0);
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    :checked ~ span {
      color: #fff;
      transform: rotate(180deg);
    }
  }  
`;

const MapPage = (props) => {
  let routeParams = props.location.params;
  const [params, setParams] = useState({
    start: routeParams ? routeParams.start : "",
    end: routeParams ? routeParams.end : "", 
    currMap: null
  });
  const [currDirections, setCurrDirections] = useState([]);
  
  useEffect(() => {
    handleSearch ();
  }, []);

  async function handleSearch () {
    try {
      const placesList = await Fetch.zomato('');
      // setPlaces(placesList);
    } catch (err) {
      // setPlaces([]);
    }
  }

  async function onMapLoaded (map) {
    setParams({
      start: params.start, 
      end: params.end,
      currMap: map
    });
    Directions.initRenderer();
    const dir = await Directions.getDirections({start: params.start,
                                                end: params.end,
                                                currMap: map });
    setCurrDirections(dir);
  } 

  async function fetchDir () {
    const dir = await Directions.getDirections(params);
    console.log(params);
    setCurrDirections(dir);
  }


  return (
    <MapPageContainer>
      <Checkbox type="checkbox"></Checkbox>
      <span>>></span>
      <InputsContainer>
        <InputPlus name="start" placeholder="Skąd"
                  onChange={ (value) => setParams({start: value,
                                                end: params.end,
                                                currMap: params.currMap} )} />
        <InputPlus name="end" placeholder="Dokąd"
                  onChange={ (value) => setParams({start: params.start,
                                                end: value,
                                                currMap: params.currMap} )} />
        <Button onClick={()=> fetchDir() }>Wyszukaj</Button>
        </InputsContainer>
        <MapContainer>
          <Map onMapLoaded={onMapLoaded}
               dir={currDirections} />
        </MapContainer>
    </MapPageContainer>
  );
}

export default MapPage;

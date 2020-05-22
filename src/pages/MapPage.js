import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as checkboxActions from "redux/actions/checkboxActions";
import * as placesActions from "redux/actions/placesActions";

import Map from "components/Map";
import Sidenav from "components/Sidenav";

import Directions from "services/Directions";
import Geocoding from "../services/Geocoding";

const MapPageContainer = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: block;
  } 
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const MapPage = (props) => {
  const [currMap, setCurrMap] = useState(null);

  async function onMapLoaded (map) {
    setCurrMap(map);
    try{
      if(props.input.start && props.input.end){
        Directions.initRenderer();
        await Directions.getDirections({
          start: props.input.start,
          end: props.input.end,
          currMap: map
        });
      } else if(props.input.end){
        await Geocoding.findLatLang(props.input.end, map);
      }
    } catch(e){
      console.log(e.message);
    }
  } 

  function handlePlacesSearch (place) {
    props.saveCheckbox(place);
    props.fetchPlaces(place);
  }

  return (
    <MapPageContainer>
      <Sidenav 
        end={props.input.end}
        handlePlacesSearch={handlePlacesSearch}
        checkboxes={props.checkbox}  >
      </Sidenav>
      <MapContainer>
        <Map
          onMapLoaded={onMapLoaded}
          checkboxes={props.checkbox}
          places={props.places} >
        </Map>
      </MapContainer>
    </MapPageContainer>
  );
}

function mapSateToProps(state){
  return {
    input: state.input,
    checkbox: state.checkbox,
    places: state.places
  }
}

function mapDispatchToProps(dispatch){
  return {
    saveCheckbox: bindActionCreators(checkboxActions.saveCheckbox, dispatch),
    resetCheckboxes: bindActionCreators(checkboxActions.resetCheckboxes, dispatch),
    fetchPlaces: bindActionCreators(placesActions.fetchPlaces, dispatch)
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(MapPage);
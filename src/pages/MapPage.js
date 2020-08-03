import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import styled from 'styled-components';

import { fetchPlacesData } from "actions/places";

import Map from "components/Map";
import Sidenav from "components/Sidenav";

import Directions from "services/Directions";
import Geocoding from "services/Geocoding";
import usePlaceFetch from "../hooks/usePlaceFetch";

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
  const [checkboxes, setCheckboxes] = useState([]);
  const [places, setPlaces] = usePlaceFetch();
  const trip = useSelector(state => state.trip);
  const dispatch = useDispatch();

  async function onMapLoaded (map) {
    setCurrMap(map);
    try{
      if(trip.start && trip.end){
        Directions.initRenderer();
        await Directions.getDirections({
          start: trip.start,
           end: trip.end,
          currMap: map
        });
      } else if(trip.end){
        await Geocoding.findLatLang(trip.end, map);
      }
    } catch(e){
      console.log(e.message);
    }
  }

  function handlePlacesSearch (place) {
    dispatch(fetchPlacesData(place, trip.end));
    if(checkboxes.includes(place)) {
      setCheckboxes(checkboxes.filter(item => item !== place));
    } else {
      setCheckboxes([...checkboxes, place]);
    }
  }

  return (
    <MapPageContainer>
      <Sidenav
        end={trip.end}
        handlePlacesSearch={handlePlacesSearch}
        checkboxes={checkboxes}  >
      </Sidenav>
      <MapContainer>
        <Map
          onMapLoaded={onMapLoaded}
          checkboxes={checkboxes}
          places={places} >
        </Map>
      </MapContainer>
    </MapPageContainer>
  );
}

export default MapPage;

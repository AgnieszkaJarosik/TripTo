import React, {useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import styled from 'styled-components';

import { fetchPlacesData } from "actions/places";

import SidenavList from "components/SidenavList";
import PlacesList from "components/PlacesList";
import Place from "components/Place";
import Animation from "components/Animation";

const ListContainer = styled.div`
  display: flex;
  height: 100%;
`;

const PlacesPage = () => {
  const places = useSelector(state => state.fetch.places);
  const isLoading = useSelector(state => state.fetch.isLoading);
  const isError = useSelector(state => state.fetch.isError);
  const trip = useSelector(state => state.trip);
  const [checkboxes, setCheckboxes] = useState(['Muzea']);
  const dispatch = useDispatch();
  const options = ['Muzea', 'Galerie sztuki', 'Zabytki', 'Kościoły', 'Parki', 'Pomniki'];

  useEffect( () => {
    dispatch(fetchPlacesData('Muzea', trip.end));
  }, []);

  function handlePlacesSearch (place) {
    if(checkboxes.includes(place)) {
      setCheckboxes(checkboxes.filter(item => item !== place));
    } else {
      setCheckboxes([...checkboxes, place]);
      dispatch(fetchPlacesData(place, trip.end));
    }
  }

  return (
    <ListContainer>
      <SidenavList end={trip.end}
              places={options}
              checkboxes={checkboxes}
              handlePlacesSearch={handlePlacesSearch} >
      </SidenavList>
      <PlacesList>
        {isLoading && <Animation></Animation>}
        {isError && Object.keys(places).length === 0 && <h2>Error</h2>}
        {places && Object.keys(places).map( key => {
          if(checkboxes.includes(key)){
            return places[key].map( place => (
              <Place key={place.id} place={place}></Place>
            ))
          } else {
            return null;
          }s
          })
        }
      </PlacesList>
    </ListContainer>
  );
};

export default PlacesPage;

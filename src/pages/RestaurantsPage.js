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

const RestaurantsPage = () => {
  const places = useSelector(state => state.fetch.places);
  const isLoading = useSelector(state => state.fetch.isLoading);
  const isError = useSelector(state => state.fetch.isError);
  const trip = useSelector(state => state.trip);
  const [checkboxes, setCheckboxes] = useState(['Restauracja']);
  const dispatch = useDispatch();
  const restaurants = ['Restauracja', 'Fastfood', 'Pizzeria', 'Bar mleczny', 'Kawiarnia', 'Pub'];

  useEffect( () => {
    dispatch(fetchPlacesData('Restauracja', trip.end));
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
                   places={restaurants}
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
          }
        })
        }
      </PlacesList>
    </ListContainer>
  );
};

export default RestaurantsPage;

import React, {useEffect} from "react";
import styled from 'styled-components';

import { connect } from "react-redux";
import * as checkboxActions from "redux/actions/checkboxActions";
import * as restaurantsActions from "redux/actions/restaurantsActions";
import { bindActionCreators } from "redux";

import SidenavList from "components/SidenavList";
import PlacesList from "components/PlacesList";
import Place from "components/Place";
import Animation from "components/Animation";

const ListContainer = styled.div`
  display: flex;
  height: 100%;
`;

const RestaurantsPage = (props) => {
  const restaurants = ['Restauracja', 'Fastfood', 'Pizzeria', 'Bar mleczny', 'Kawiarnia', 'Pub'];

  useEffect( () => {
      props.resetCheckboxes('Restauracja');
      props.fetchRestaurants('Restauracja');
  }, []);

  function handlePlacesSearch (place) {
    props.saveCheckbox(place);
    props.fetchRestaurants(place);
  }

  return (
    <ListContainer>
      <SidenavList end={props.input.end}
                   places={restaurants}
                   checkboxes={props.checkbox}
                   handlePlacesSearch={handlePlacesSearch} >
      </SidenavList>
      <PlacesList>
        <Animation></Animation>
        {props.restaurants && Object.keys(props.restaurants).map( key => {
          if(props.checkbox.includes(key)){
            return props.restaurants[key].map( place => (
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

function mapSateToProps(state){
  return {
    input: state.input,
    checkbox: state.checkbox,
    restaurants: state.restaurants,
    end: state.end
  }
}

function mapDispatchToProps(dispatch){
  return {
    saveCheckbox: bindActionCreators(checkboxActions.saveCheckbox, dispatch),
    resetCheckboxes: bindActionCreators(checkboxActions.resetCheckboxes, dispatch),
    fetchRestaurants: bindActionCreators(restaurantsActions.fetchRestaurants, dispatch)
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(RestaurantsPage);
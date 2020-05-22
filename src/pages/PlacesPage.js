import React, {useEffect} from "react";
import styled from 'styled-components';

import { connect } from "react-redux";
import * as checkboxActions from "redux/actions/checkboxActions";
import * as placesActions from "redux/actions/placesActions";
import { bindActionCreators } from "redux";

import SidenavList from "components/SidenavList";
import PlacesList from "components/PlacesList";
import Place from "components/Place";
import Animation from "components/Animation";

const ListContainer = styled.div`
  display: flex;
  height: 100%;
`;

const PlacesPage = (props) => {
  const places = ['Muzea', 'Galerie sztuki', 'Zabytki', 'Kościoły', 'Parki', 'Pomniki'];

  useEffect( () => {
    props.resetCheckboxes('Muzea');
    props.fetchPlaces('Muzea');
  }, []);

  function handlePlacesSearch (place) {
    props.saveCheckbox(place);
    props.fetchPlaces(place);
  }

  return (
    <ListContainer>
      <SidenavList end={props.input.end}
              places={places}
              checkboxes={props.checkbox}
              handlePlacesSearch={handlePlacesSearch} >
      </SidenavList>
      <PlacesList>
        <Animation></Animation>
        {props.places && Object.keys(props.places).map( key => {
          if(props.checkbox.includes(key)){
            return props.places[key].map( place => (
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
    places: state.places,
    end: state.end
  }
}

function mapDispatchToProps(dispatch){
  return {
    saveCheckbox: bindActionCreators(checkboxActions.saveCheckbox, dispatch),
    resetCheckboxes: bindActionCreators(checkboxActions.resetCheckboxes, dispatch),
    fetchPlaces: bindActionCreators(placesActions.fetchPlaces, dispatch),
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(PlacesPage);
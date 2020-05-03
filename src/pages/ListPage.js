import React, {useEffect} from "react";
import styled from 'styled-components';
import { useLocation } from "react-router-dom";

import { connect } from "react-redux";
import * as checkboxActions from "redux/actions/checkboxActions";
import * as placesActions from "redux/actions/placesActions";
import { bindActionCreators } from "redux";

import SidenavList from "components/SidenavList";
import Place from "components/Place";
import Animation from "components/Animation";

const ListContainer = styled.div`
  display: flex;
  height: 100%;
`;

const PlacesList = styled.div`
  height: 100%;
  padding: 0 1rem;
  width: 100%;
  background-color: rgba(233, 229, 232, .2);
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  align-self: center;
  font-size: 2rem;
  color: #C3745C;
`;

const ListPage = (props) => {
  const location = useLocation().pathname;

  useEffect( () => {
    if(location==="/restaurants") {
      props.resetCheckboxes('Restauracja');
      props.fetchPlaces('Restauracja');
    }  else {
      props.resetCheckboxes('Muzea');
      props.fetchPlaces('Muzea');
    }
  }, [location]);

  useEffect( () => {
    return () => {
      props.resetCheckboxes();
    }
  }, []);

  function handlePlacesSearch (place) {
    props.saveCheckbox(place);
    props.fetchPlaces(place);
  }

  return (
    <ListContainer>
      <SidenavList end={props.input.end}
              site={location}
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
    fetchPlaces: bindActionCreators(placesActions.fetchPlaces, dispatch)
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(ListPage);
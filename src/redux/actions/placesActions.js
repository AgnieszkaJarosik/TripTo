import * as types from "redux/actions/actionTypes";
import {setEndStatus} from "redux/actions/fetchEndAction";
import fetch from "services/Fetch";

export function fetchPlacesSuccess(value){
  return { type: types.FETCH_PLACES_SUCCESS, value }
}

export function deletePlaces(){
  return { type: types.DELETE_TRIP }
}

//  thunk

export function fetchPlaces(place){  
  return function(dispatch, getState) {
    const state = getState();
    if (shouldFetchPlaces(state, place)){
      dispatch(setEndStatus(false));
      return fetch.yelp(place, state.input.end)  
      .then( resp => {
        dispatch(fetchPlacesSuccess({resp:resp, name:place}));
        dispatch(setEndStatus(true));
      })
      .catch(e => {
        console.log(e);
      })
    } 
  };
}

function shouldFetchPlaces(state, place) {
  const occured = Object.keys(state.places).find( p => p===place);
  if (occured) {
    return false;
  } else {
    return true;
  }
}
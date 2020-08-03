import { latinize } from "utils/latinize";

export const ACTION_TYPES = {
  FETCH_PLACES: "FETCH_PLACES",
  FETCH_PLACES_SUCCESS: "FETCH_PLACES_SUCCESS",
  FETCH_PLACES_ERROR: "FETCH_PLACES_ERROR",
  DELETE_PLACES: "DELETE_PLACES"
};

const fetchPlaces = () => ({ type: ACTION_TYPES.FETCH_PLACES });
const fetchPlacesSuccess = (places, term) => ({
  type: ACTION_TYPES.FETCH_PLACES_SUCCESS,
  places,
  term
});
const fetchPlacesError = () => ({ type: ACTION_TYPES.FETCH_PLACES_ERROR});

export const deletePlaces = () => ({ type: ACTION_TYPES.DELETE_PLACES });

export const fetchPlacesData = (term, location) => {
  return async (dispatch, getState) => {
    const places = getState();
    const occured = Object.keys(places).find( p => p === term);

    if(occured) {
      return;
    }

    try {
      dispatch(fetchPlaces());

      const latinLocation = latinize(location);
      const url = `https://trip-to.herokuapp.com/restaurants?location=${latinLocation}&term=${term}`;
      const response = await fetch(url);
      const places = await response.json();

      dispatch(fetchPlacesSuccess(places, term));
    } catch (e) {
      console.error(e.message);
      dispatch(fetchPlacesError());
    }
  };
};

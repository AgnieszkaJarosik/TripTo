import { ACTION_TYPES } from "actions/places";

const initialState = {
  places: {},
  isLoading: true,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PLACES:
      return { ...state, isLoading: true, isError: false };
    case ACTION_TYPES.FETCH_PLACES_SUCCESS:
      return { places: {...state.places, [action.term]: action.places}, isLoading: false, isError: false };
    case ACTION_TYPES.FETCH_PLACES_ERROR:
      return { ...state, isLoading: false, isError: true };
    case ACTION_TYPES.DELETE_PLACES:
      return { places: {}, isLoading: false, isError: false };
    default:
      return state;
  }
};

export default reducer;

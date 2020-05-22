import { combineReducers } from 'redux';
import inputReducer from "./inputReducer";
import checkboxReducer from "./checkboxReducer";
import placesReducer from "./placesReducer";
import restaurantsReducer from "./restaurantsReducer";
import fetchEndReducer from "./fetchEndReducer";

const rootReducer = combineReducers({
  input: inputReducer,
  checkbox: checkboxReducer,
  places: placesReducer,
  restaurants: restaurantsReducer,
  end: fetchEndReducer
});

export default rootReducer;
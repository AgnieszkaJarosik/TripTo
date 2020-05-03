import { combineReducers } from 'redux';
import inputReducer from "./inputReducer";
import checkboxReducer from "./checkboxReducer";
import placesReducer from "./placesReducer";
import fetchEndReducer from "./fetchEndReducer";

const rootReducer = combineReducers({
  input: inputReducer,
  checkbox: checkboxReducer,
  places: placesReducer,
  end: fetchEndReducer
});

export default rootReducer;
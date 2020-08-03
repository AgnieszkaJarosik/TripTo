import { combineReducers } from "redux";

import trip from "./trip";
import places from "./places";

const rootReducer = combineReducers({
  trip: trip,
  fetch: places,
});

export default rootReducer;

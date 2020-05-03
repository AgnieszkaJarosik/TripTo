import * as types from "redux/actions/actionTypes";

export default function placesReducer (state=false, action) {
  switch (action.type){
    case types.SET_END_STATUS:
      return action.value;
    default:
      return state;
  }
}
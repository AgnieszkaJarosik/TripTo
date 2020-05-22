import * as types from "redux/actions/actionTypes";

export default function restaurantsReducer (state={}, action) {
  switch (action.type){
    case types.FETCH_RESTAURANTS_SUCCESS:
      return {...state, [action.value.name]: action.value.resp};
    case types.DELETE_TRIP:
      return {};
    default:
      return state;
  }
}
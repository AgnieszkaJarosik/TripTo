import * as types from "redux/actions/actionTypes";

export default function inputReducer (state={}, action) {
  switch (action.type){
    case types.SAVE_INPUT:
      return {...action.value};
    case types.DELETE_INPUT:
      return {};
    default:
      return state;
  }
}
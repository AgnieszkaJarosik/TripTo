import * as types from "redux/actions/actionTypes";

export default function checkboxReducer (state=[], action) {
  switch (action.type){
    case types.SAVE_CHECKBOX:
      if(isPresent(state, action)) {
        return state.filter( elem => elem !== action.value);
      } else {
        return [...state, action.value];
      }
    case types.RESET_CHECKBOXES:
      return [action.value];
    default:
      return state;
  }
}

function isPresent (state, element) {
  const occured = state.find( elem => elem === element.value);
  if (occured) {
    return true;
  } else {
    return false;
  }
}
import * as types from "redux/actions/actionTypes";

export function saveCheckbox(value){
  return { type: types.SAVE_CHECKBOX, value };
}

export function resetCheckboxes(value){
  return { type: types.RESET_CHECKBOXES, value };
}
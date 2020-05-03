import * as types from "redux/actions/actionTypes";

export function saveInput(value){
  return { type: types.SAVE_INPUT, value};
}

export function deleteInput(){
  return { type: types.DELETE_INPUT };
}
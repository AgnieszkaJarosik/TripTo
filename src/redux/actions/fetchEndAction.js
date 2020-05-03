import * as types from "redux/actions/actionTypes";

export function setEndStatus(value){
  return { type: types.SET_END_STATUS, value }
}
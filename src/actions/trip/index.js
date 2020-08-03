export const ACTION_TYPES = {
  SAVE_INPUT: "SAVE_INPUT",
  DELETE_INPUT: "DELETE_INPUT"
};

export function saveInput(value){
  return { type: ACTION_TYPES.SAVE_INPUT, value};
}

export function deleteInput(){
  return { type: ACTION_TYPES.DELETE_INPUT };
}

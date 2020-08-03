import {ACTION_TYPES} from "actions/trip";

const initialState = {
  start: "",
  end: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_INPUT:
      return { start: action.value.start, end: action.value.end };
    case ACTION_TYPES.DELETE_INPUT:
      return initialState;
    default:
      return state;
  }
}

export default reducer;

import * as actionsTypes from "./actionsTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
});

export default (state = defaultState, action) => {
  if (action.type === actionsTypes.SEARCH_FOCUS) {
    return state.set("focused", true);
  }

  if (action.type === actionsTypes.SEARCH_BLUR) {
    return state.set("focused", false);
  }

  if (action.type === actionsTypes.CHANGE_LIST) {
    return state.set("list", action.data);
  }

  return state;
};

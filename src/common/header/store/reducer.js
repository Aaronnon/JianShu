import * as actionsTypes from "./actionsTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.SEARCH_FOCUS:
      return state.set("focused", true);
    case actionsTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionsTypes.CHANGE_LIST:
      return state.set("list", action.data);
    default:
      return state;
  }
};

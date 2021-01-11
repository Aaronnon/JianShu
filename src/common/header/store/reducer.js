import * as actionsTypes from "./actionsTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

const A = (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.SEARCH_FOCUS:
      return state.set("focused", true);
    case actionsTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionsTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      });
    case actionsTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionsTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionsTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};

export default A;

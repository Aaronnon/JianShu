import * as actionsTypes from "./actionsTypes";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = (data) => ({
  type: actionsTypes.CHANGE_LIST,
  data: fromJS(data),
});

export const searchFocus = () => ({
  type: actionsTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: actionsTypes.SEARCH_BLUR,
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
};

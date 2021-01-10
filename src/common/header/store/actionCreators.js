import * as actionsTypes from "./actionsTypes";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = (data) => ({
  type: actionsTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
  type: actionsTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: actionsTypes.SEARCH_BLUR,
});

export const mouseEnter = () => ({
  type: actionsTypes.MOUSE_ENTER,
});
export const mouseLeave = () => ({
  type: actionsTypes.MOUSE_LEAVE,
});
export const changePage = (page) => ({
  type: actionsTypes.CHANGE_PAGE,
  page,
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

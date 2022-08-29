import { Map } from "immutable";
import * as actionTypes from "./constants";

// 转成immutable对象
const defaultState = Map({
  homeBanners: [],
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATA_HOME_BANNERS:
      return state.set("homeBanners", action.homeBanners);
    default:
      return state;
  }
};

import * as actionTypes from "./constants";
const defaultState = {
  homeBanners: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATA_HOME_BANNERS:
      return { ...state, homeBanners: action.homeBanners };
    default:
      return state;
  }
};

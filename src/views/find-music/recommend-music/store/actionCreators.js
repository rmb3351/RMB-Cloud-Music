import * as actionTypes from "./constants";

import { getHomeBanners } from "services/getFindMusicDatas";

/* 给主页轮播图的state赋值的action */
const updateHomeBannersAction = (res) => ({
  type: actionTypes.UPDATA_HOME_BANNERS,
  homeBanners: res.banners,
});

/* 请求轮播图数据的action */
export const getHomeBannersAction = () => {
  return (dispatch) => {
    getHomeBanners().then((res) => {
      dispatch(updateHomeBannersAction(res));
    });
  };
};

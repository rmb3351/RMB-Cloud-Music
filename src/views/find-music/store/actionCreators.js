import * as actionTypes from "./constants";

import {
  getHomeBanners,
  getHotRecommendsSongLists,
} from "services/getFindMusicDatas";

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

/* 给热门推荐的state赋值的action */
const updateSongListsAction = (res) => ({
  type: actionTypes.UPDATA_SONG_LISTS,
  songLists: res.playlists,
});

/* 请求热门推荐歌单数据的action */
export const getSongListsAction = (param) => {
  return (dispatch) => {
    getHotRecommendsSongLists(param).then((res) => {
      dispatch(updateSongListsAction(res));
    });
  };
};

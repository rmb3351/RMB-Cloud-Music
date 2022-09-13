import * as actionTypes from "./constants";

import {
  getHomeBanners,
  getHotRecommendsSongLists,
  getHotRecommendsNewAlbums,
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

/* 给新碟上架的state赋值的action */
const updateNewAlbumsAction = (res) => ({
  type: actionTypes.UPDATA_NEW_ALBUMS,
  newAlbums: res.newAlbums,
});

/* 请求新碟上架数据的action */
export const getNewAlbumsAction = (param = {}) => {
  return (dispatch) => {
    getHotRecommendsNewAlbums(param).then((res) => {
      /* 主动给offset和limit出来，可以订制获取数量和偏移，并做数据量越界处理，优先从周数据中取 */
      let { offset = 0, limit = 10 } = param;
      let newAlbums = res.weekData ? res.weekData : res.monthData;
      const newAlbumsCounts = newAlbums.length;
      // 越界处理
      if (offset + limit > newAlbumsCounts) {
        if (limit <= newAlbumsCounts) {
          newAlbums = newAlbums.slice(newAlbumsCounts - limit, newAlbumsCounts);
        }
      } else newAlbums = newAlbums.slice(offset, offset + limit);
      dispatch(updateNewAlbumsAction({ newAlbums }));
    });
  };
};

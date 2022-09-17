import { Map } from "immutable";
import * as actionTypes from "./constants";

// 转成immutable对象
const defaultState = Map({
  homeBanners: [],
  songLists: [],
  newAlbums: [],
  /* 所有歌单信息和三个歌单的具体数据 */
  allLists: [],
  listsData: {},
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HOME_BANNERS:
      return state.set("homeBanners", action.homeBanners);
    case actionTypes.UPDATE_SONG_LISTS:
      return state.set("songLists", action.songLists);
    case actionTypes.UPDATE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.UPDATE_ALL_LISTS:
      return state.set("allLists", action.allLists);
    case actionTypes.UPDATE_LISTS_DATA:
      /* 这个写法是为了确保数据按顺序排进对应位置 */
      return state.set("listsData", {
        ...state.get("listsData"),
        [action.index]: action.listData,
      });
    default:
      return state;
  }
};

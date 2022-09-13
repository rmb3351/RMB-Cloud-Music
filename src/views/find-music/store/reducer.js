import { Map } from "immutable";
import * as actionTypes from "./constants";

// 转成immutable对象
const defaultState = Map({
  homeBanners: [],
  songLists: [],
  newAlbums: [],
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATA_HOME_BANNERS:
      return state.set("homeBanners", action.homeBanners);
    case actionTypes.UPDATA_SONG_LISTS:
      return state.set("songLists", action.songLists);
    case actionTypes.UPDATA_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);
    default:
      return state;
  }
};

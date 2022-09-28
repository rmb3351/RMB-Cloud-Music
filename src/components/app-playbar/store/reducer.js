import { Map } from "immutable";
import * as actionTypes from "./constants";

// 转成immutable对象
const defaultState = Map({
  currentSong: {},
  currentSongIndex: 0,
  currentSongList: [],
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_SONG_DETAIL:
      return state.set("currentSong", action.currentSong);
    case actionTypes.UPDATE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);
    case actionTypes.UPDATE_CURRENT_SONG_LIST:
      return state.set("currentSongList", action.currentSongList);
    default:
      return state;
  }
};

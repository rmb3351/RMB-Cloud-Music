import { Map } from "immutable";
import * as actionTypes from "./constants";

// 转成immutable对象
const defaultState = Map({
  currentSong: {},
  currentSongIndex: 0,
  currentSongList: [],
  playMode: actionTypes.PLAY_MODES[0],
  currentLyric: [],
  currentLyricList: [],
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_SONG_DETAIL:
      return state.set("currentSong", action.currentSong);
    case actionTypes.UPDATE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);
    case actionTypes.UPDATE_CURRENT_SONG_LIST:
      return state.set("currentSongList", action.currentSongList);
    case actionTypes.UPDATE_CURRENT_PLAY_MODE:
      return state.set("playMode", action.playMode);
    case actionTypes.UPDATE_CURRENT_LYRIC_DETAIL:
      return state.set("currentLyric", action.currentLyric);
    case actionTypes.UPDATE_CURRENT_LYRIC_LIST:
      return state.set("currentLyricList", action.currentLyricList);
    default:
      return state;
  }
};

import { Map } from "immutable";
import * as actionTypes from "./constants";

// 转成immutable对象
const defaultState = Map({
  currentSong: {},
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_SONG_DETAIL:
      return state.set("currentSong", action.currentSong);
    default:
      return state;
  }
};

import * as actionTypes from "./constants";

import { getSongDetail } from "services/getSongsDatas";

/* 给当前歌曲详情的state赋值的action */
const updateCurrentSongDetailAction = (res) => ({
  type: actionTypes.UPDATE_CURRENT_SONG_DETAIL,
  currentSong: res.songs[0],
});

/* 请求当前歌曲详情的action */
export const getCurrentSongDetailAction = ({ ids } = {}) => {
  return (dispatch) => {
    getSongDetail({ ids }).then((res) => {
      dispatch(updateCurrentSongDetailAction(res));
    });
  };
};

import * as actionTypes from "./constants";

import { getSongDetail } from "services/getSongsDatas";

/* 给当前歌曲详情的state赋值的action */
const updateCurrentSongDetailAction = (res) => ({
  type: actionTypes.UPDATE_CURRENT_SONG_DETAIL,
  currentSong: res,
});

/* 请求当前歌曲详情的action */
export const getCurrentSongDetailAction = ({ ids } = {}) => {
  return (dispatch, getState) => {
    const songList = getState().getIn(["playBar", "currentSongList"]);
    const songIndex = songList.findIndex((song) => song.id === ids);
    /* 检查播放列表是否有这首歌，区别处理 */
    if (songIndex > -1) {
      dispatch(updateCurrentSongDetailAction(songList[songIndex]));
      dispatch(updateCurrentSongIndexAction(songIndex));
    } else {
      getSongDetail({ ids }).then((res) => {
        if (!res.songs) return;
        const requestSong = res.songs[0];
        const songListNew = [...songList, requestSong];
        dispatch(updateCurrentSongDetailAction(requestSong));
        dispatch(updateCurrentSongListAction(songListNew));
        dispatch(updateCurrentSongIndexAction(songListNew.length - 1));
      });
    }
  };
};

/* 给当前歌曲在播放列表内的index的state赋值的action */
const updateCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.UPDATE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

/* 给播放列表内的index的state赋值的action */
const updateCurrentSongListAction = (currentSongList) => ({
  type: actionTypes.UPDATE_CURRENT_SONG_LIST,
  currentSongList,
});

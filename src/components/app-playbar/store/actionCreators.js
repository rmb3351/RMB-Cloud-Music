import * as actionTypes from "./constants";

import { getSongDetail } from "services/getSongsDatas";
import { getLyricsDetail } from "../../../services/getSongsDatas";
import { lyricsFormat } from "utils/dataFormat";

/* 给当前歌曲详情的state赋值的action */
const updateCurrentSongDetailAction = (res) => ({
  type: actionTypes.UPDATE_CURRENT_SONG_DETAIL,
  currentSong: res,
});

/* 给当前歌曲歌词的state赋值的action */
const updateCurrentLyricDetailAction = (res) => ({
  type: actionTypes.UPDATE_CURRENT_LYRIC_DETAIL,
  currentLyric: res,
});

/* 请求当前歌曲和歌词详情的action */
export const getCurrentSongDetailAction = ({ ids } = {}) => {
  return (dispatch, getState) => {
    const songList = getState().getIn(["playBar", "currentSongList"]);
    const lyricList = getState().getIn(["playBar", "currentLyricList"]);
    const songIndex = songList.findIndex((song) => song.id === ids);
    /* 检查播放列表是否有这首歌，区别处理 */
    if (songIndex > -1) {
      dispatch(updateCurrentSongDetailAction(songList[songIndex]));
      dispatch(updateCurrentLyricDetailAction(lyricList[songIndex]));
      dispatch(updateCurrentSongIndexAction(songIndex));
    } else {
      getSongDetail({ ids }).then((res) => {
        if (!res.songs) return;
        const requestSong = res.songs[0];
        const songListNew = [...songList, requestSong];
        dispatch(updateCurrentSongDetailAction(requestSong));
        dispatch(updateCurrentSongListAction(songListNew));
        dispatch(updateCurrentSongIndexAction(songListNew.length - 1));
        /* 成功获取歌曲后，再匹配歌词，如果获取歌词失败，添加默认歌词数组，保证和歌曲列表对应 */
        getLyricsDetail({ id: ids })
          .then((res) => {
            let requestLyrics = [
              { time: Number.MAX_SAFE_INTEGER, content: "暂无歌词" },
            ];
            if (res.lrc?.lyric) {
              requestLyrics = lyricsFormat(res.lrc.lyric);
            }
            const lyricListNew = [...lyricList, requestLyrics];
            dispatch(updateCurrentLyricDetailAction(requestLyrics));
            dispatch(updateCurrentLyricListAction(lyricListNew));
          })
          .catch((err) => {
            let requestLyrics = [
              { time: Number.MAX_SAFE_INTEGER, content: "暂无歌词" },
            ];
            dispatch(updateCurrentLyricDetailAction(requestLyrics));
            dispatch(
              updateCurrentLyricListAction([...lyricList, requestLyrics])
            );
          });
      });
    }
  };
};

/* 给当前歌曲在播放列表内的index的state赋值的action */
const updateCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.UPDATE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

/* 给播放列表的state赋值的action */
const updateCurrentSongListAction = (currentSongList) => ({
  type: actionTypes.UPDATE_CURRENT_SONG_LIST,
  currentSongList,
});

/* 给歌词列表的state赋值的action */
const updateCurrentLyricListAction = (currentLyricList) => ({
  type: actionTypes.UPDATE_CURRENT_LYRIC_LIST,
  currentLyricList,
});

/* 给播放模式的state赋值的action */
export const updatePlayModeAction = (index) => ({
  type: actionTypes.UPDATE_CURRENT_PLAY_MODE,
  playMode: actionTypes.PLAY_MODES[index],
});

/* 处理歌曲切换的action，tag为1或-1 */
export const updateCurrentSongAction = (tag) => {
  return (dispatch, getState) => {
    const playMode = getState().getIn(["playBar", "playMode"]);
    const songList = getState().getIn(["playBar", "currentSongList"]);
    const lyricList = getState().getIn(["playBar", "currentLyricList"]);
    let songIndex = getState().getIn(["playBar", "currentSongIndex"]);
    let nextSongIndex;
    /* 随机时随机切换，否则按列表切换 */
    if (playMode === actionTypes.PLAY_MODES[2]) {
      // 一直随机到和现在这首不相同为止
      do {
        nextSongIndex = Math.floor(Math.random() * songList.length);
      } while (nextSongIndex === songIndex && songList.length > 1);
    } else {
      // 按照列表的上一首或下一首
      nextSongIndex = songIndex + tag;
      if (nextSongIndex === songList.length) nextSongIndex = 0;
      else if (nextSongIndex === -1) nextSongIndex = songList.length - 1;
    }
    dispatch(updateCurrentSongIndexAction(nextSongIndex));
    dispatch(updateCurrentSongDetailAction(songList[nextSongIndex]));
    dispatch(updateCurrentLyricDetailAction(lyricList[nextSongIndex]));
  };
};

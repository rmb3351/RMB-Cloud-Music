/* 因为多个地方都可能修改当前歌曲信息，所以这里加个playbar/区分一下 */
const UPDATE_CURRENT_SONG_INDEX = "playbar/updateCurrentSongIndex";
const UPDATE_CURRENT_SONG_DETAIL = "playbar/updateCurrentSongDetail";
const UPDATE_CURRENT_SONG_LIST = "playbar/updateCurrentSongList";
const UPDATE_CURRENT_PLAY_MODE = "playbar/updatePlayMode";
const UPDATE_CURRENT_LYRIC_DETAIL = "playbar/updateCurrentLyricDetail";
const UPDATE_CURRENT_LYRIC_LIST = "playbar/updateCurrentLyricList";

const PLAY_MODES = ["loop", "single", "random"];
export {
  UPDATE_CURRENT_SONG_DETAIL,
  UPDATE_CURRENT_SONG_INDEX,
  UPDATE_CURRENT_SONG_LIST,
  UPDATE_CURRENT_PLAY_MODE,
  UPDATE_CURRENT_LYRIC_DETAIL,
  UPDATE_CURRENT_LYRIC_LIST,
  PLAY_MODES,
};

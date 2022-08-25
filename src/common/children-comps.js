import RecommendMusic from "../views/find-music/recommend-music";
import { MusicRanking } from "../views/find-music/music-ranking";
import { SongList } from "../views/find-music/song-list";
import { DjRadio } from "../views/find-music/dj-radio";
import { Artist } from "../views/find-music/artist";
import { Albums } from "../views/find-music/albums";

/* 发现音乐的路径-子组件映射：先把可能带参数的写在前面，最后匹配不上则默认匹配推荐页面 */
const findMusicCompsMaps = {
  "/discover/toplist": <MusicRanking></MusicRanking>,
  "/discover/playlist": <SongList></SongList>,
  "/discover/djradio": <DjRadio></DjRadio>,
  "/discover/artist": <Artist></Artist>,
  "/discover/album": <Albums></Albums>,
  "/": <RecommendMusic></RecommendMusic>,
};

export { findMusicCompsMaps };

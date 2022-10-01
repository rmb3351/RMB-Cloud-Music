import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Slider } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  BarWrapper,
  BarControls,
  BarChoices,
  BarCentral,
  BarContent,
} from "./style";
import {
  getCurrentSongDetailAction,
  updateCurrentSongAction,
  updatePlayModeAction,
} from "./store/actionCreators";
import { formatDate } from "utils/dataFormat";
const RMBPlaybar = memo((props) => {
  /* 组件和redux内部的state */
  const { currentSong, playMode, currentSongList } = useSelector(
    (state) => ({
      currentSong: state.getIn(["playBar", "currentSong"]),
      playMode: state.getIn(["playBar", "playMode"]),
      currentSongList: state.getIn(["playBar", "currentSongList"]),
    }),
    shallowEqual
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [silderChanging, setSliderChanging] = useState(false);
  const [playModeIndex, setPlayModeIndex] = useState(0);

  const playModeCNMaps = {
    loop: "循环",
    single: "单曲循环",
    random: "随机",
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentSongDetailAction({ ids: 25843036 }));
  }, [dispatch]);

  /* 改正在播放的歌曲id，不能依赖isFirstLoad，不然切换了isFirstLoad为false之后还会重新回调 */
  useEffect(() => {
    if (currentSong.id) {
      audioRef.current.src = `https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`;
      if (!isFirstLoad) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        setIsFirstLoad(false);
      }
    }
  }, [currentSong]);

  // 音频标签的ref
  const audioRef = useRef();

  /* 歌曲信息展示的一些数据 */
  let picUrl = "";
  let name = "";
  let arName = "";
  let dt = 0;
  function handleSongDetail() {
    picUrl = currentSong.al.picUrl;
    name = currentSong.name;
    arName = currentSong.ar[0].name;
    dt = currentSong.dt;
  }
  if (Object.keys(currentSong).length) handleSongDetail();

  /* 按钮点击事件监听 */
  function handlePlayClick() {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  }
  function handleSwitchSong(tag) {
    dispatch(updateCurrentSongAction(tag));
  }
  function changePlayMode(e) {
    e.preventDefault();
    const curPlayModeIndex = (playModeIndex + 1) % 3;
    setPlayModeIndex(curPlayModeIndex);
    dispatch(updatePlayModeAction(curPlayModeIndex));
  }

  /* 原生组件回调 */
  function timeUpdate(e) {
    if (!silderChanging) setCurrentTime(audioRef.current.currentTime * 1000);
  }
  function playEnded() {
    if (playModeIndex === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleSwitchSong(1);
    }
  }

  /* 自定义组件的回调函数需要使用usecallback钩子包装 */
  const sliderChange = useCallback(
    (value) => {
      setSliderChanging(true);
      setCurrentTime((value / 100) * dt);
    },
    [dt]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      const slideCurrentTime = (value / 100) * dt;
      /* setState异步，所以下面直接用currentTime不能正确设置播放进度 */
      setCurrentTime(slideCurrentTime);
      audioRef.current.currentTime = slideCurrentTime / 1000;
      setSliderChanging(false);
    },
    [dt]
  );

  return (
    <BarWrapper>
      <BarContent className="wrap-v2">
        <BarControls>
          <button
            className="prev"
            title="上一首(ctrl+←)"
            onClick={() => handleSwitchSong(-1)}
          ></button>
          <button
            className={isPlaying ? "pause" : "play"}
            title="播放/暂停(p)"
            onClick={() => handlePlayClick()}
          ></button>
          <button
            className="next"
            title="下一首(ctrl+→)"
            onClick={() => handleSwitchSong(1)}
          ></button>
        </BarControls>
        <BarCentral>
          <div className="central-left">
            <img src={`${picUrl}?param=34y34`} alt="加载失败" />
            <a href="/todo" className="album-mask text_hide">
              歌曲详情
            </a>
          </div>
          <div className="central-right">
            <div className="central-right__top">
              <a href="/todo" className="song-name" title={name}>
                {name}
              </a>
              <a href="/todo" className="song-artist" title={arName}>
                {arName}
              </a>
              <a
                href="/todo"
                className="song-source text_hide"
                title="来自榜单"
              >
                来自榜单
              </a>
            </div>
            <div className="central-right__bottom">
              <Slider
                className="slider"
                value={(currentTime / dt) * 100}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
                tooltip={{ open: false, visible: false }}
              />
              <span className="song-time">
                <em>{formatDate(currentTime, "mm:ss")}</em> /{" "}
                {formatDate(dt, "mm:ss")}
              </span>
            </div>
          </div>
        </BarCentral>
        <BarChoices>
          <div className="left-choices">
            <a
              href="/todo"
              className="text_hide choice-lyrics"
              title="画中画歌词"
            >
              画中画歌词
            </a>
            <a href="/todo" className="text_hide choice-collect" title="收藏">
              收藏
            </a>
            <a href="/todo" className="text_hide choice-share" title="分享">
              分享
            </a>
          </div>
          <div className="right-choices">
            <a href="/todo" className="choice-volume text_hide">
              音量
            </a>
            <a
              href="/todo"
              className={`play-mode-${playMode} text_hide`}
              title={playModeCNMaps[playMode]}
              onClick={(e) => changePlayMode(e)}
            >
              {playModeCNMaps[playMode]}
            </a>
            <a href="/todo" className="choice-play-list" title="播放列表">
              {currentSongList.length}
            </a>
          </div>
        </BarChoices>
        <audio
          ref={audioRef}
          onTimeUpdate={timeUpdate}
          onEnded={playEnded}
        ></audio>
      </BarContent>
    </BarWrapper>
  );
});

export default RMBPlaybar;

import React, { memo, useEffect, useRef } from "react";
import { Slider } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  BarWrapper,
  BarControls,
  BarChoices,
  BarCentral,
  BarContent,
} from "./style";
import { getCurrentSongDetailAction } from "./store/actionCreators";
import { formatDate } from "utils/dataFormat";
const RMBPlaybar = memo((props) => {
  const { currentSong } = useSelector(
    (state) => ({ currentSong: state.getIn(["playBar", "currentSong"]) }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentSongDetailAction({ ids: 25843036 }));
  }, [dispatch]);
  // 音频标签的ref
  const audioRef = useRef();

  /* 歌曲信息展示的一些数据 */
  let picUrl = "";
  let name = "";
  let arName = "";
  let dt = 0;
  let id = "";
  function handleSongDetail() {
    picUrl = currentSong.al.picUrl;
    name = currentSong.name;
    arName = currentSong.ar[0].name;
    dt = currentSong.dt;
    id = currentSong.id;
  }
  if (Object.keys(currentSong).length) handleSongDetail();

  function handlePlayClick() {
    audioRef.current.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    audioRef.current.play();
  }

  function timeUpdate(e) {
    console.log(e.currentTarget.currentTime);
  }
  return (
    <BarWrapper>
      <BarContent className="wrap-v2">
        <BarControls>
          <button className="prev" title="上一首(ctrl+←)"></button>
          <button
            className="play"
            title="播放/暂停(p)"
            onClick={() => handlePlayClick()}
          ></button>
          <button className="next" title="下一首(ctrl+→)"></button>
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
              <Slider defaultValue={30} className="slider" />
              <span className="song-time">
                <em>00:00</em> / {formatDate(dt, "mm:ss")}
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
            <a href="/todo" className="choice-play-mode text_hide" title="循环">
              循环
            </a>
            <a href="/todo" className="choice-play-list" title="播放列表">
              5
            </a>
          </div>
        </BarChoices>
        <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
      </BarContent>
    </BarWrapper>
  );
});

/* 限制props的属性和给默认值 */
RMBPlaybar.propTypes = {
  info: PropTypes.object.isRequired,
};
RMBPlaybar.defaultProps = {
  info: {},
};

export default RMBPlaybar;

import React, { memo } from "react";
import { Slider } from "antd";
import PropTypes from "prop-types";

import {
  BarWrapper,
  BarControls,
  BarChoices,
  BarCentral,
  BarContent,
} from "./style";
const RMBPlaybar = memo((props) => {
  return (
    <BarWrapper>
      <BarContent className="wrap-v2">
        <BarControls>
          <button className="prev" title="上一首(ctrl+←)"></button>
          <button className="play" title="播放/暂停(p)"></button>
          <button className="next" title="下一首(ctrl+→)"></button>
        </BarControls>
        <BarCentral>
          <div className="central-left">
            <img
              src="https://p2.music.126.net/z0b7uhQmjXdFqkgBTSpsfA==/109951167891177817.jpg?param=34y34"
              alt="加载失败"
            />
            <a href="/todo" className="album-mask text_hide">
              歌曲详情
            </a>
          </div>
          <div className="central-right">
            <div className="central-right__top">
              <a href="/todo" className="song-name" title="被人">
                被人
              </a>
              <a href="/todo" className="song-artist" title="薛之谦">
                薛之谦
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
                <em>00:00</em> / 00:00
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
          <div className="right-choices"></div>
        </BarChoices>
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

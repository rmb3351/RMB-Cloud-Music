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
            <a
              href="https://p2.music.126.net/z0b7uhQmjXdFqkgBTSpsfA==/109951167891177817.jpg?param=34y34"
              className="album-mask text_hide"
            >
              歌曲详情
            </a>
          </div>
          <div className="central-right">
            <div className="central-right__top">
              <a
                href="https://p2.music.126.net/z0b7uhQmjXdFqkgBTSpsfA==/109951167891177817.jpg?param=34y34"
                className="song-name"
                title="被人"
              >
                被人
              </a>
              <a
                href="https://p2.music.126.net/z0b7uhQmjXdFqkgBTSpsfA==/109951167891177817.jpg?param=34y34"
                className="song-artist"
                title="薛之谦"
              >
                薛之谦
              </a>
              <a
                href="https://p2.music.126.net/z0b7uhQmjXdFqkgBTSpsfA==/109951167891177817.jpg?param=34y34"
                className="song-source text_hide"
                title="来自榜单"
              >
                来自榜单
              </a>
            </div>
            <div className="central-right__bottom">
              <Slider defaultValue={30} />
            </div>
          </div>
        </BarCentral>
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

import React, { memo } from "react";
import PropTypes from "prop-types";

import {
  ListHeader,
  ListContents,
  ListWrapper,
  ListFooter,
  HeaderImg,
  HeaderOthers,
} from "./style";
const RMBSingleRankingList = memo((props) => {
  // 需要限制categories类型
  const { info } = props;
  return (
    <ListWrapper>
      <ListHeader>
        <HeaderImg>
          <img
            src={`${info.coverImgUrl}?param=100x100`}
            alt={info.name}
            className="cover-img"
          />
          <a href="/todo" className="img-mask text_hide" title={info.name}>
            {info.name}
          </a>
        </HeaderImg>
        <HeaderOthers>
          <a href="/todo" title={info.name} className="list-title">
            <h3>{info.name}</h3>
          </a>
          <div className="header-btns">
            <a href="/todo" className="play-btn text_hide" title="播放">
              播放
            </a>
            <a href="/todo" className="collect-btn text_hide" title="收藏">
              收藏
            </a>
          </div>
        </HeaderOthers>
      </ListHeader>
      <ListContents>
        <ol className="song-list">
          {info.tracks.slice(0, 10).map((track, index) => (
            <li key={track.id} className="song-item">
              <span className="song-no">{index + 1}</span>
              <a href="/todo" title={track.name} className="song-name__link">
                {track.name}
              </a>
              <div className="operation-btns">
                <a href="/todo" className="play-btn text_hide" title="播放">
                  播放
                </a>
                <a
                  href="/todo"
                  className="add-btn text_hide"
                  title="添加到播放列表"
                >
                  添加到播放列表
                </a>
                <a href="/todo" className="collect-btn text_hide" title="收藏">
                  收藏
                </a>
              </div>
            </li>
          ))}
        </ol>
      </ListContents>
      <ListFooter>
        <a href="/todo" className="footer-link">
          查看全部&gt;
        </a>
      </ListFooter>
    </ListWrapper>
  );
});

/* 限制props的属性和给默认值 */
RMBSingleRankingList.propTypes = {
  info: PropTypes.object.isRequired,
};
RMBSingleRankingList.defaultProps = {
  info: {},
};

export default RMBSingleRankingList;

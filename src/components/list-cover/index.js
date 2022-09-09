import React, { memo } from "react";
import PropTypes from "prop-types";

import { CoverUpPart, CoverDownPart, CoverWrapper } from "./style";
import { playCountFormat } from "../../utils/dataFormat";
const RMBListCover = memo((props) => {
  // 需要限制categories类型
  const { info } = props;
  return (
    <CoverWrapper>
      <CoverUpPart>
        <img
          src={`${info.coverImgUrl}?param=140x140`}
          alt="加载失败啦"
          title={info.name}
          className="up-part-cover"
        />
        <div className="up-part-bottom">
          <span className="bottom-icon-headset"></span>
          <span className="bottom-count-text">
            {playCountFormat(info.playCount)}
          </span>
          <span className="bottom-icon-play" title="播放"></span>
        </div>
      </CoverUpPart>
      <CoverDownPart>
        <p className="down-part-paragraph">
          <span className="down-part-title" title={info.name}>
            {info.name}
          </span>
        </p>
      </CoverDownPart>
    </CoverWrapper>
  );
});

/* 限制props的属性和给默认值 */
RMBListCover.propTypes = {
  info: PropTypes.object.isRequired,
};
RMBListCover.defaultProps = {
  info: {},
};

export default RMBListCover;

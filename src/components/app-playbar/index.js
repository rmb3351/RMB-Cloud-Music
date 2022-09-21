import React, { memo } from "react";
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

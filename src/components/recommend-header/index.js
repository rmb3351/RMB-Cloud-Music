import React, { memo } from "react";
import PropTypes from "prop-types";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
const RMBRcmHeader = memo((props) => {
  // 需要限制categories类型
  const { categories, title } = props;
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="left-circle"></span>
        <span className="header-title">{title}</span>
        <ul className="header-tabs">
          {categories?.map((category, index) => (
            <li key={category}>
              <span className="tab-text">{category}</span>
              {index === categories.length - 1 ? null : (
                <span className="header-divider">|</span>
              )}
            </li>
          ))}
        </ul>
      </HeaderLeft>
      <HeaderRight>
        <span className="more">
          <a href="/discover/playlist/" className="s-fc3">
            更多
          </a>
          <i className="cor s-bg s-bg-6">&nbsp;</i>
        </span>
      </HeaderRight>
    </HeaderWrapper>
  );
});

/* 限制props的属性和给默认值 */
RMBRcmHeader.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array,
};
RMBRcmHeader.defaultProps = {
  title: "默认标题",
  categories: [],
};

export default RMBRcmHeader;

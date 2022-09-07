import React, { memo } from "react";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
const RMBRcmHeader = memo((props) => {
  // 需要限制categories类型
  const { categories = [], title } = props;
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h2>{title}</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <span>{category}</span>
              <span>|</span>
            </li>
          ))}
        </ul>
      </HeaderLeft>
      <HeaderRight>
        <span class="more">
          <a href="/discover/playlist/" class="s-fc3">
            更多
          </a>
          <i class="cor s-bg s-bg-6">&nbsp;</i>
        </span>
      </HeaderRight>
    </HeaderWrapper>
  );
});

export default RMBRcmHeader;

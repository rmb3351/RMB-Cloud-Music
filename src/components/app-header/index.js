import React, { memo, useState } from "react";

import { Input } from "antd";

import { ContentLeft, ContentRight, HeaderWrapper } from "./style";
import { linkMaps } from "@/common/links-data.js";
import { renderLinks } from "../../utils/renderLinksFn";
const RMBAppHeader = memo(() => {
  const [activeName] = useState("nav-active");
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <ContentLeft>
          <a href="#/" className="sprite_01 logo">
            {/* 这里写内容是为了seo优化更容易搜索到，在样式里将文字缩进调足够大就看不到了 */}
            RMB云音乐
          </a>
          {renderLinks(linkMaps, activeName)}
        </ContentLeft>
        <ContentRight>
          <div className="searchbar-box">
            <Input placeholder="音乐/视频/电台/用户" className="search"></Input>
          </div>
          <div className="center-btn">创作者中心</div>
          <div className="login-btn">登录</div>
        </ContentRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default RMBAppHeader;

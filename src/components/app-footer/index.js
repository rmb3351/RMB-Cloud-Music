import React, { memo } from "react";
import { ContentLeft, ContentRight, FooterWrapper } from "./style";
import { bottomLeftLinkMaps } from "@/common/links-data.js";
import { renderLinks } from "../../utils/renderLinksFn";

const RMBAppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <ContentLeft>
          {renderLinks(bottomLeftLinkMaps)}
          <div className="sec-line">
            <span className="copyright">CoderRMB版权所有©1993-2022</span>
            <span>京州苦读科技有限公司运营：</span>
            <span className="certificate">汉妄文[2077] 888-431号</span>
          </div>
          <div className="third-line">
            <a href="#/">汉A8-20999876-28 娱乐业和运营部未备案管理系统网站</a>
            <span className="git-icon"></span>
            <a href="#/">汉公网安备 974932749843号</a>
          </div>
          <span>不联网宗教信息服务许可怔：汉（2022）0000120</span>
        </ContentLeft>
        <ContentRight>hhhhhhhhhhhhh</ContentRight>
      </div>
    </FooterWrapper>
  );
});

export default RMBAppFooter;

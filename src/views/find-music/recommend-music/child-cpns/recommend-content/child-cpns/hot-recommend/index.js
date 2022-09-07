import React, { memo } from "react";
import { HotWrapper } from "./style";
import RMBRcmHeader from "components/recommend-header";

const HotRecommend = memo(() => {
  return (
    <HotWrapper>
      <RMBRcmHeader
        title="热门推荐"
        categories={["华语", "流行", "摇滚", "民谣", "电子"]}
      ></RMBRcmHeader>
    </HotWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(HotRecommend);

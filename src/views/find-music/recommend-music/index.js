import React, { memo } from "react";

import { RecommendWrapper } from "./style";
import HomeBanners from "./child-cpns/home-banners";
import RecommendContent from "./child-cpns/recommend-content";

const RecommendMusic = memo(() => {
  return (
    <RecommendWrapper>
      <HomeBanners></HomeBanners>
      <RecommendContent></RecommendContent>
    </RecommendWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(RecommendMusic);

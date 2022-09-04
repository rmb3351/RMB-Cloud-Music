import React, { memo } from "react";
import { RecommendWrapper } from "./style";
import HomeBanners from "../../../components/home-banners";

const RecommendMusic = memo(() => {
  return (
    <RecommendWrapper>
      <h2>这里是推荐页面</h2>
      <HomeBanners></HomeBanners>
    </RecommendWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(RecommendMusic);

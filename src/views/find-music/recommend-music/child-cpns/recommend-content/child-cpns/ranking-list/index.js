import React, { memo } from "react";
import { RankingWrapper } from "./style";
import RMBRcmHeader from "components/recommend-header";

const RankingList = memo(() => {
  return (
    <RankingWrapper>
      <RMBRcmHeader title="榜单"></RMBRcmHeader>
    </RankingWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(RankingList);
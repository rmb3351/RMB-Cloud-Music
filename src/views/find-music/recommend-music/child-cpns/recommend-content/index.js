import React, { memo } from "react";
import { ContentWrapper } from "./style";
import HotRecommend from "./child-cpns/hot-recommend";
import NewAlbums from "./child-cpns/new-albums";
import RankingList from "./child-cpns/ranking-list";

const RecommendContent = memo(() => {
  return (
    <ContentWrapper className="wrap-v2">
      <HotRecommend></HotRecommend>
      <NewAlbums></NewAlbums>
      <RankingList></RankingList>
    </ContentWrapper>
  );
});

export default RecommendContent;

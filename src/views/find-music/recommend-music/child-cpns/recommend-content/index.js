import React, { memo } from "react";

import { ContentWrapper, ContentLeft, ContentRight } from "./style";
import HotRecommend from "./child-cpns/hot-recommend";
import NewAlbums from "./child-cpns/new-albums";
import RankingList from "./child-cpns/ranking-list";

const RecommendContent = memo(() => {
  return (
    <ContentWrapper className="wrap-v2">
      <ContentLeft>
        <HotRecommend></HotRecommend>
        <NewAlbums></NewAlbums>
        <RankingList></RankingList>
      </ContentLeft>
      <ContentRight></ContentRight>
    </ContentWrapper>
  );
});

export default RecommendContent;

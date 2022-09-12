import React, { memo, useEffect } from "react";

import { getHotRecommendsNewAlbums } from "services/getFindMusicDatas";
import { NewAlbumsWrapper, NewAlbumsContent } from "./style";
import RMBRcmHeader from "components/recommend-header";

const NewAlbums = memo(() => {
  useEffect(() => {
    getHotRecommendsNewAlbums().then((res) => {
      console.log("11111res", res);
    });
  }, []);

  return (
    <NewAlbumsWrapper>
      <RMBRcmHeader title="新碟上架"></RMBRcmHeader>
      <NewAlbumsContent></NewAlbumsContent>
    </NewAlbumsWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(NewAlbums);

import React, { memo } from "react";
import { NewAlbumsWrapper } from "./style";
import RMBRcmHeader from "components/recommend-header";

const NewAlbums = memo(() => {
  return (
    <NewAlbumsWrapper>
      <RMBRcmHeader title="新碟上架"></RMBRcmHeader>
    </NewAlbumsWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(NewAlbums);

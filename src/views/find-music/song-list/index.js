import React, { memo } from "react";
import { SongListWrapper } from "./style";
export const SongList = memo(() => {
  return (
    <SongListWrapper>
      <h2>这里是歌单页面</h2>
    </SongListWrapper>
  );
});

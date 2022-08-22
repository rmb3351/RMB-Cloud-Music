import React, { memo, useState } from "react";
import { DiscoverWrapper, MenuItemContent, TopMenu } from "./style";
import { DiscoverLinkMaps } from "../../common/links-data";
import { useRenderLinks } from "../../utils/renderLinksFn";

import { RecommendMusic } from "./recommend-music";
import { MusicRanking } from "./music-ranking";
import { SongList } from "./song-list";
import { DjRadio } from "./dj-radio";
import { Artist } from "./artist";
import { Albums } from "./albums";
import { useLocation } from "react-router-dom";

function useChildComps() {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/discover":
      return <RecommendMusic />;
    case "/discover/toplist":
      return <MusicRanking />;
    case "/discover/playlist":
      return <SongList />;
    case "/discover/djradio":
      return <DjRadio />;
    case "/discover/artist":
      return <Artist />;
    case "/discover/album":
      return <Albums />;
    default:
      return <RecommendMusic />;
  }
}
export const FindMusic = memo(() => {
  const [activeName] = useState("discover-link-active");
  return (
    <DiscoverWrapper>
      <TopMenu className="wrap-v1">
        {useRenderLinks(DiscoverLinkMaps, activeName)}
      </TopMenu>
      <MenuItemContent>{useChildComps()}</MenuItemContent>
    </DiscoverWrapper>
  );
});

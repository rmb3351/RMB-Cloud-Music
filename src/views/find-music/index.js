import React, { memo, useState } from "react";
import { useLocation } from "react-router-dom";

import { DiscoverWrapper, MenuItemContent, TopMenu } from "./style";
import { discoverLinkMaps } from "../../common/links-data";
import { useRenderLinks } from "../../utils/renderLinksFn";
import { renderChildComps } from "../../utils/renderChildComps";
import { findMusicCompsMaps } from "../../common/children-comps";

export const FindMusic = memo(() => {
  const [activeName] = useState("discover-link-active");
  const { pathname } = useLocation();
  return (
    <DiscoverWrapper>
      <TopMenu className="wrap-v1">
        {useRenderLinks(discoverLinkMaps, activeName)}
      </TopMenu>
      <MenuItemContent>
        {renderChildComps(pathname, findMusicCompsMaps)}
      </MenuItemContent>
    </DiscoverWrapper>
  );
});

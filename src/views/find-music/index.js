import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { DiscoverWrapper, MenuItemContent, TopMenu } from "./style";
import { discoverLinkMaps } from "../../common/links-data";
import { useRenderLinks } from "../../utils/renderLinksFn";
import { renderChildComps } from "../../utils/renderChildComps";
import { findMusicCompsMaps } from "../../common/children-comps";
import { getSomeComments } from "../../services/getFindMusicDatas";

export const FindMusic = memo(() => {
  const [activeName] = useState("discover-link-active");
  const { pathname } = useLocation();
  useEffect(() => {
    getSomeComments({ id: 186016 })
      .then((res) => console.log("收到响应res", res))
      .catch((err) => console.error("未收到响应err", err));
  }, []);

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

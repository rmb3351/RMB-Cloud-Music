import React, { memo, useState } from "react";
import { DiscoverWrapper, MenuItemContent, TopMenu } from "./style";
import { DiscoverLinkMaps } from "../../common/links-data";
import { useRenderLinks } from "../../utils/renderLinksFn";
export const FindMusic = memo(() => {
  const [activeName] = useState("discover-link-active");
  return (
    <DiscoverWrapper>
      <TopMenu className="wrap-v1">
        {useRenderLinks(DiscoverLinkMaps, activeName)}
      </TopMenu>
      <MenuItemContent></MenuItemContent>
    </DiscoverWrapper>
  );
});

import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { ContentLeft, ContentRight, HeaderWrapper } from "./style";
import linkMaps from "@/common/links-data.js";
const RMBAppHeader = memo(() => {
  const [activeName] = useState("nav-active");
  function renderLinks(links) {
    return links.map((link) =>
      link.comp === "a" ? (
        <a href={link.link} key={link.title}>
          {link.title}
        </a>
      ) : (
        <NavLink
          to={link.link}
          key={link.title}
          className={({ isActive }) => (isActive ? activeName : null)}
        >
          {link.title}
        </NavLink>
      )
    );
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <ContentLeft>
          <a href="#/" className="sprite_01 logo">
            {null}
          </a>
          {renderLinks(linkMaps)}
        </ContentLeft>
        <ContentRight>hhh</ContentRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default RMBAppHeader;

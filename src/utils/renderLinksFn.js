import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
/* 定义成自定义hook，好用useLocation来判断是否路径是否是/ */
export function useRenderLinks(links, activeName = "active") {
  const { pathname } = useLocation();
  return (
    <ul>
      {links.map((link) =>
        link.comp === "a" ? (
          <li key={link.title}>
            <a href={link.link} className={link.className || ""}>
              {!link.className ? link.title : ""}
            </a>
          </li>
        ) : (
          <li key={link.title}>
            <NavLink
              to={link.link}
              className={({ isActive }) =>
                // 如果是discover下的路径，匹配发现音乐
                pathname.includes("/discover") && link.link === "/"
                  ? [activeName, link.className].filter(Boolean)
                  : isActive
                  ? [activeName, link.className].filter(Boolean)
                  : null
              }
            >
              {link.title}
            </NavLink>
          </li>
        )
      )}
    </ul>
  );
}

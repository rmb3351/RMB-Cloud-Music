import { NavLink } from "react-router-dom";

export function renderLinks(links, activeName = "active") {
  return (
    <ul>
      {links.map((link) =>
        link.comp === "a" ? (
          <li key={link.title}>
            <a href={link.link}>{link.title}</a>
          </li>
        ) : (
          <li key={link.title}>
            <NavLink
              to={link.link}
              className={({ isActive }) => (isActive ? activeName : null)}
            >
              {link.title}
            </NavLink>
          </li>
        )
      )}
    </ul>
  );
}

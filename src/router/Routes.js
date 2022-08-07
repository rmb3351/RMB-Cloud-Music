import { useRoutes } from "react-router-dom";
import { DownLoad } from "views/download";
import { FindMusic } from "views/find-music";
import { Friend } from "views/friend";
import { Musician } from "views/musician";
import { My } from "views/my-music";
import { ShopStore } from "views/shop-store";
export function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <FindMusic></FindMusic>,
    },
    {
      path: "/my",
      element: <My></My>,
    },
    {
      path: "/friend",
      element: <Friend></Friend>,
    },
    {
      path: "/store/product",
      element: <ShopStore></ShopStore>,
    },
    {
      path: "/st/musician",
      element: <Musician></Musician>,
    },
    {
      path: "/download",
      element: <DownLoad></DownLoad>,
    },
  ]);
}

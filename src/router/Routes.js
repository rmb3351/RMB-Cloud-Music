import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const DownLoad = lazy(() => import("views/download"));
const FindMusic = lazy(() => import("views/find-music"));
const Friend = lazy(() => import("views/friend"));
const Musician = lazy(() => import("views/musician"));
const My = lazy(() => import("views/my-music"));
const ShopStore = lazy(() => import("views/shop-store"));
export function Routes() {
  return useRoutes([
    /* 根路径和discover下的所有路径，都匹配FindMusic组件 */
    {
      path: "/",
      element: <FindMusic></FindMusic>,
    },
    {
      path: "/discover/*",
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

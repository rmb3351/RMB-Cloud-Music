/* 顶部链接的渲染映射数组 */
const linkMaps = [
  { link: "/", title: "发现音乐", comp: "NavLink" },
  { link: "/my", title: "我的音乐", comp: "NavLink" },
  { link: "/friend", title: "关注", comp: "NavLink" },
  { link: "/store/product", title: "商城", comp: "a" },
  { link: "/st/musician", title: "音乐人", comp: "a" },
  { link: "/download", title: "下载客户端", comp: "NavLink" },
];

/* 底部左侧链接映射 */
const bottomLeftLinkMaps = [
  { link: "/", title: "服务条款", comp: "a" },
  { link: "/", title: "隐私政策", comp: "a" },
  { link: "/", title: "儿童隐私政策", comp: "a" },
  { link: "/", title: "版权投诉", comp: "a" },
  { link: "/", title: "投资者关系", comp: "a" },
  { link: "/", title: "广告合作", comp: "a" },
  { link: "/", title: "廉政举报", comp: "a" },
  { link: "/", title: "联系我们", comp: "a" },
];

/* 底部右侧上部链接映射 */
const bottomRightUpLinkMaps = [
  { link: "/", title: "自媒体", comp: "a", className: "self-media" },
  { link: "/", title: "用户认证", comp: "a", className: "user-verify" },
  {
    link: "/",
    title: "独立音乐人",
    comp: "a",
    className: "independent-musician",
  },
  { link: "/", title: "赞赏", comp: "a", className: "like" },
  { link: "/", title: "视频奖励", comp: "a", className: "video-reward" },
];

/* 底部右侧下部链接映射 */
const bottomRightDownLinkMaps = [
  { link: "/", title: "自媒体", comp: "a", className: "self-media-text" },
  { link: "/", title: "用户认证", comp: "a", className: "user-verify-text" },
  {
    link: "/",
    title: "独立音乐人",
    comp: "a",
    className: "independent-musician-text",
  },
  { link: "/", title: "赞赏", comp: "a", className: "like-text" },
  { link: "/", title: "视频奖励", comp: "a", className: "video-reward-text" },
];

/* 发现音乐下子菜单的链接映射 */
const discoverLinkMaps = [
  {
    link: "/discover",
    title: "推荐",
    comp: "NavLink",
  },
  { link: "/discover/toplist", title: "排行榜", comp: "NavLink" },
  {
    link: "/discover/playlist",
    title: "歌单",
    comp: "NavLink",
  },
  { link: "/discover/djradio", title: "主播电台", comp: "NavLink" },
  { link: "/discover/artist", title: "歌手", comp: "NavLink" },
  { link: "/discover/album", title: "新碟上架", comp: "NavLink" },
];
export {
  linkMaps,
  bottomLeftLinkMaps,
  bottomRightUpLinkMaps,
  bottomRightDownLinkMaps,
  discoverLinkMaps,
};

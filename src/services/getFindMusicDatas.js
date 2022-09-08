import rmbRequest from "./request";

export function getSomeComments({ id, limit = 1 }) {
  return rmbRequest.get("comment/music", { id, limit });
}

export function getHomeBanners({ type = 0 } = {}) {
  return rmbRequest.get("/banner", { type });
}

/**
 *
 * @param order 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
 * @param cat tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @param  limit 取出歌单数量 , 默认为 8
 * @param  offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 * @returns 返回一个封装的get请求
 */
export function getHotRecommendsSongLists({
  order,
  cat,
  limit = 8,
  offset,
} = {}) {
  return rmbRequest.get("/top/playlist", { order, cat, limit, offset });
}

import rmbRequest from "./request";

/**
 * @param ids 音乐 id, 如 ids=347230，(支持多个 id, 用 , 隔开)
 * @returns 返回一个封装的get请求，返回字段详情见接口文档
 */
export function getSongDetail({ ids } = {}) {
  return rmbRequest.get("/song/detail", { ids });
}

/**
 * @param id 音乐 id, 如 id=347230
 * @returns 返回一个封装的get请求
 */
export function getLyricsDetail({ id } = {}) {
  return rmbRequest.get("/lyric", { id });
}

import rmbRequest from "./request";

export function getSomeComments({ id, limit = 1 }) {
  return rmbRequest.get("comment/music", { id, limit });
}

export function getHomeBanners({ type = 0 } = {}) {
  return rmbRequest.get("/banner", { type });
}

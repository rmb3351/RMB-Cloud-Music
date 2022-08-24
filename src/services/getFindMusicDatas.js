import rmbRequest from "./request";

export function getSomeComments({ id, limit = 1 }) {
  return rmbRequest.get("comment/music", { id, limit });
}

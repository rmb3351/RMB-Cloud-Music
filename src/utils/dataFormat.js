const SCALE = 10000;
export function playCountFormat(playCount) {
  if (playCount < SCALE) {
    return playCount;
  } else if (playCount < SCALE * SCALE) {
    return Math.floor(playCount / SCALE) + "万";
  } else {
    return Math.floor(playCount / (SCALE * SCALE)) + "亿";
  }
}

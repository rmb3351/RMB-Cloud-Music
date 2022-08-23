// 根据传入的路径名去匹配组件映射对象，匹配上则直接返回
export function renderChildComps(pathname, pathCompMap) {
  for (const path of Object.keys(pathCompMap)) {
    if (pathname.includes(path)) return pathCompMap[path];
  }
}

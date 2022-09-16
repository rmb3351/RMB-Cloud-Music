export default function throttle(
  fn,
  interval = 1000,
  // 是否开始先执行一次，是否结束时执行一次
  options = { leading: true, trailing: false }
) {
  // 1.记录上一次的开始时间
  const { leading, trailing, resultCallback } = options;
  let lastTime = 0;
  let timer = null;
  // 2.事件触发时, 真正执行的函数，...args是调用封装后的防抖函数（即_throttle）时传进来的参数;
  const _throttle = function (...args) {
    return new Promise((resolve, reject) => {
      // 2.1.获取当前事件触发时的时间
      const nowTime = new Date().getTime();
      // 第一次执行且设置开始不需要先执行一次
      if (!lastTime && !leading) lastTime = nowTime;
      // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长时间需要去触发函数;
      const remainTime = interval - (nowTime - lastTime);
      // 触发时间到，调用防抖函数
      if (remainTime <= 0) {
        // 先清空定时器
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        // 2.3.真正触发函数
        const result = fn.apply(this, args);
        // 把返回值放到回调里作为参数
        if (resultCallback) resultCallback(result);
        resolve(result);
        // 2.4.保留这次触发的时间
        lastTime = nowTime;
        return;
      }
      // 最后需要调用且还没到时间调用
      if (trailing && !timer) {
        // 到时间后清空计时器且调用
        timer = setTimeout(() => {
          timer = null;
          // 如果开始时没用调用，lastTime置为0，保证调用
          lastTime = !leading ? 0 : new Date().getTime();
          const result = fn.apply(this, args);
          if (resultCallback) resultCallback(result);
          resolve(result);
        }, remainTime);
      }
    });
  };
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };
  return _throttle;
}

import React, { memo, useEffect, useRef, useState } from "react";
// shallowEqual是类似connect的mapStateToProps中优化的浅层比较函数：如果只是对对象做修改，不是整个重新赋值，则不重新渲染
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { getHomeBannersAction } from "views/find-music/store/actionCreators";
import {
  BannerContent,
  BannerWrappers,
  ContentLeft,
  ContentRight,
} from "./style";
import "./transitionStyle.css";
const HomeBanners = memo(() => {
  // state.findMusic是src/store/reducer.js里combinedReducer里发现音乐部分的reducer
  const { homeBanners } = useSelector((state) => {
    return {
      // 这里的state和state下一级的对象都变成了immutable对象，都要直接用api
      // homeBanners: state.get("findMusic").get("homeBanners"),
      // getIn:传入数组，顺序读取对应属性
      homeBanners: state.getIn(["findMusic", "homeBanners"]),
    };
  }, shallowEqual);

  // 设置图片下标和区分是否是第一次加载（激活首张轮播图的过渡效果）的state
  const [imageIndex, setIndex] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeBannersAction());
  }, [dispatch]);

  // 为了在钩子中使用并修改timer变量，将其作为useRef的返回值，修改时改他的.current属性
  let timer = useRef();
  /* 用于自动切换图片的和设置动画的钩子 */
  useEffect(() => {
    if (homeBanners.length) {
      if (isFirst) setIsFirst(false);
      timer.current = setTimeout(() => {
        setIndex((imageIndex + 1) % homeBanners.length);
      }, 5000);
    }
  }, [imageIndex, homeBanners, isFirst]);

  function handleClearTimerAndSwitch(index) {
    setIndex(index);
    // 避免切换错乱，清除定时器
    if (timer) {
      clearTimeout(timer.current);
    }
  }

  return (
    <BannerWrappers>
      <BannerContent className="wrap-v2">
        <ContentLeft>
          {homeBanners.map((banner, index) => (
            <CSSTransition
              // 除了轮播图刚获取数据的加载，否则实际看到的是下一张，所以激活下一张
              in={
                isFirst
                  ? index === imageIndex
                  : index === (imageIndex + 1) % homeBanners.length
              }
              classNames="img-item"
              timeout={5000}
              key={banner.imageUrl}
            >
              <div
                style={{ transform: `translateY(${-285 * imageIndex}px)` }}
                className="banner-item"
              >
                <img
                  src={banner.imageUrl}
                  className="banner-image"
                  alt={banner.imageUrl}
                ></img>
              </div>
            </CSSTransition>
          ))}
          <ul className="dots">
            {homeBanners.map((banner, index) => (
              <li
                key={banner.imageUrl}
                className="dot-li"
                onClick={() => handleClearTimerAndSwitch(index)}
              >
                <span
                  // 类名这里有问题
                  className={JSON.stringify({
                    dot: true,
                    active: isFirst
                      ? index === imageIndex
                      : index === (imageIndex + 1) % homeBanners.length,
                  })}
                ></span>
              </li>
            ))}
          </ul>
        </ContentLeft>
        <ContentRight>
          <a
            id="side-download"
            href="/download"
            className="btn"
            hidefocus="true"
          >
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </ContentRight>
      </BannerContent>
    </BannerWrappers>
  );
});

/* 导出被memo包装的HomeBanners */
export default memo(HomeBanners);

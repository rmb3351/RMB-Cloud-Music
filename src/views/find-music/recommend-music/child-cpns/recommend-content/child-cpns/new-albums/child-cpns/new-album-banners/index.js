import React, { memo, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { BannerWrappers, BannerControls, BannerContent } from "./style";
import "./transitionStyle.css";
const NewAlbumBanners = memo((props) => {
  const { newAlbums } = props;
  // 设置图片下标和区分是否是第一次加载（激活首张轮播图的过渡效果）的state
  const [imageIndex, setIndex] = useState(0);

  // 为了在钩子中使用并修改timer变量，将其作为useRef的返回值，修改时改他的.current属性
  let timer = useRef();
  /* 用于自动切换图片的和设置动画的钩子 */
  useEffect(() => {
    if (newAlbums.length) {
      timer.current = setTimeout(() => {
        setIndex((imageIndex + 1) % newAlbums.length);
      }, 5000);
    }
    // , isFirst
  }, [imageIndex, newAlbums]);

  function handleClearTimerAndSwitch(index) {
    if (index === newAlbums.length) index = 0;
    else if (index === -1) index = newAlbums.length - 1;
    setIndex(index);
    // 避免切换错乱，清除定时器
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }

  return (
    <BannerWrappers
      style={{
        backgroundImage: `url(${
          newAlbums.length ? newAlbums[imageIndex].imageUrl : ""
        }?imageView&blur=40x20)`,
        backgroundSize: "6000px",
        backgroundPosition: "center center",
      }}
    >
      {newAlbums.length ? (
        <BannerControls className="wrap-v1">
          <span
            className="left-arr"
            onClick={() => handleClearTimerAndSwitch(imageIndex - 1)}
          ></span>
          <BannerContent className="wrap-v2">
            {newAlbums.map((banner, index) => (
              <CSSTransition
                // 除了轮播图刚获取数据的加载，否则实际看到的是下一张，所以激活下一张
                in={index === imageIndex}
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
              {newAlbums.map((banner, index) => (
                <li
                  key={banner.imageUrl}
                  className="dot-li"
                  onClick={() => handleClearTimerAndSwitch(index)}
                >
                  <span
                    className={["dot", index === imageIndex ? " active" : ""]
                      .filter(Boolean)
                      .join(" ")}
                  ></span>
                </li>
              ))}
            </ul>
          </BannerContent>
          <span
            className="right-arr"
            onClick={() => handleClearTimerAndSwitch(imageIndex + 1)}
          ></span>
        </BannerControls>
      ) : null}
    </BannerWrappers>
  );
});

/* 导出被memo包装的HomeBanners */
export default memo(NewAlbumBanners);

import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { BannerWrappers, BannerControls, BannerContent } from "./style";
import "./transitionStyle.css";
const NewAlbumBanners = memo((props) => {
  const { newAlbums } = props;
  // 设置图片下标和区分是否是第一次加载（激活首张轮播图的过渡效果）的state
  const [imageIndex, setIndex] = useState(0);

  function handleClearTimerAndSwitch(index) {
    if (index === newAlbums.length) index = 0;
    else if (index === -1) index = newAlbums.length - 1;
    setIndex(index);
  }

  return (
    <BannerWrappers>
      {newAlbums.length ? (
        <BannerControls className="wrap-v3">
          <span
            className="left-arr"
            onClick={() => handleClearTimerAndSwitch(imageIndex - 1)}
          ></span>
          <BannerContent>
            {newAlbums.map((banner, index) => (
              <CSSTransition
                // 除了轮播图刚获取数据的加载，否则实际看到的是下一张，所以激活下一张
                in={index === imageIndex}
                classNames="img-item"
                timeout={5000}
                key={banner.id}
              >
                <div className="banner-item">
                  <img
                    src={banner.picUrl}
                    className="banner-image"
                    alt={banner.picUrl}
                  ></img>
                  <span className="banner-image-bg" title={banner.name}>
                    <span className="image-icon-play" title="播放"></span>
                  </span>
                  <div className="item-album-name">{banner.name}</div>
                  <div className="item-singer-name">{banner.artist.name}</div>
                </div>
              </CSSTransition>
            ))}
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

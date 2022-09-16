import React, { memo, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { BannerWrappers, BannerControls, BannerContent } from "./style";
import "./transitionStyle.css";

const DIVIDE_NUM = 5;
const TIME_OUT = 700;

const NewAlbumBanners = memo((props) => {
  const { newAlbums } = props;
  /* 一个画面数量的album称为一个albumPart */
  const [albumPartIndex, setIndex] = useState(1);
  const [albumsParts, setalbumsParts] = useState([]);
  const [transitionTimeOut, setTransitionTimeOut] = useState(TIME_OUT);
  const [lastTime, setLastTime] = useState(0);
  /* 计算当前在哪个albumPart，实现无缝切换和节流判断 */
  function switchIndex(index) {
    if (Date.now() - lastTime < TIME_OUT) return;
    setLastTime(Date.now());
    setTransitionTimeOut(TIME_OUT);
    setIndex(index);
    if (index === albumsParts.length - 1 || index === 0) {
      setTimeout(() => {
        /* 无动画切换 */
        setTransitionTimeOut(0);
        setIndex(index === 0 ? albumsParts.length - 2 : 1);
      }, TIME_OUT);
    }
  }

  /* 将newAlbums分成一个个albumPart */
  useEffect(() => {
    const newAlbumsArr = [];
    for (let i = 0; i < newAlbums.length / DIVIDE_NUM; i++) {
      newAlbumsArr[i] = newAlbums.slice(i * DIVIDE_NUM, (i + 1) * DIVIDE_NUM);
    }
    newAlbumsArr.unshift(newAlbumsArr[newAlbumsArr.length - 1]);
    newAlbumsArr.push(newAlbumsArr[1]);
    setalbumsParts(newAlbumsArr);
  }, [newAlbums]);

  return (
    <BannerWrappers>
      {
        <BannerControls className="wrap-v3">
          <span
            className="left-arr"
            onClick={() => switchIndex(albumPartIndex - 1)}
          ></span>
          <BannerContent>
            {albumsParts?.map((part, index) => (
              <CSSTransition
                key={index}
                classNames="part-item"
                timeout={transitionTimeOut}
                in={index === albumPartIndex}
              >
                <div
                  style={{
                    display: "inline-block",
                    transform: `translateX(${-645 * albumPartIndex}px)`,
                  }}
                >
                  {part?.map((banner, indey) => (
                    <div key={banner.id} className="banner-item">
                      <img
                        src={banner.picUrl}
                        className="banner-image"
                        alt={banner.picUrl}
                      ></img>
                      <span className="banner-image-bg" title={banner.name}>
                        <span className="image-icon-play" title="播放"></span>
                      </span>
                      <div className="item-album-name" title={banner.name}>
                        {banner.name}
                      </div>
                      <div
                        className="item-singer-name"
                        title={banner.artist.name}
                      >
                        {banner.artist.name}
                      </div>
                    </div>
                  ))}
                </div>
              </CSSTransition>
            ))}
          </BannerContent>
          <span
            className="right-arr"
            onClick={() => switchIndex(albumPartIndex + 1)}
          ></span>
        </BannerControls>
      }
    </BannerWrappers>
  );
});

/* 导出被memo包装的HomeBanners */
export default memo(NewAlbumBanners);

import React, { memo, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { BannerWrappers, BannerControls, BannerContent } from "./style";
import "./transitionStyle.css";

const DIVIDE_NUM = 5;

const NewAlbumBanners = memo((props) => {
  const { newAlbums } = props;
  /* 一个画面数量的album称为一个albumPart */
  const [albumPartIndex, setIndex] = useState(1);
  const [albumsParts, setalbumsParts] = useState([]);

  /* 计算当前在哪个albumPart */
  function handleSwitchIndex(index) {
    if (index === albumsParts.length) index = 0;
    else if (index === -1) index = albumsParts.length - 1;
    setIndex(index);
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
            onClick={() => handleSwitchIndex(albumPartIndex - 1)}
          ></span>
          <BannerContent>
            {albumsParts?.map((part, index) => (
              <CSSTransition
                key={index}
                classNames="part-item"
                timeout={700}
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
            onClick={() => handleSwitchIndex(albumPartIndex + 1)}
          ></span>
        </BannerControls>
      }
    </BannerWrappers>
  );
});

/* 导出被memo包装的HomeBanners */
export default memo(NewAlbumBanners);

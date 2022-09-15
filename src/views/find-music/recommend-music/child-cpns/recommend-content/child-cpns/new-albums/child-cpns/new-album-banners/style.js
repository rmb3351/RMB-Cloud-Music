import styled from "styled-components";
import sprite_02 from "assets/imgs/sprite_02.png";
import sprite_cover from "assets/imgs/sprite_cover.png";
import sprite_icon from "assets/imgs/sprite_icon.png";

const BannerWrappers = styled.div`
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  overflow: hidden;
`;

const BannerControls = styled.div`
  position: relative;
  display: flex;
  width: 669px;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  border: 1px solid #fff;
  overflow: hidden;
  padding-left: 16px;

  .left-arr,
  .right-arr {
    position: absolute;
    top: 71px;
    display: block;
    width: 17px;
    height: 17px;
    background: url(${sprite_02});
  }
  .left-arr {
    left: 4px;
    background-position: -260px -75px;
    &:hover {
      cursor: pointer;
      background-position: -280px -75px;
    }
  }
  .right-arr {
    right: 8px;
    background-position: -300px -75px;
    &:hover {
      cursor: pointer;
      background-position: -320px -75px;
    }
  }
`;

const BannerContent = styled.div`
  position: relative;
  width: 645px;
  height: 184px;
  white-space: nowrap;
  overflow: hidden;
  .banner-item {
    display: inline-block;
    position: relative;
    width: 118px;
    height: 150px;
    margin-top: 28px;
    margin-left: 11px;
    .banner-image {
      width: 100px;
      height: 100px;
      &:hover {
        cursor: pointer;
      }
    }
    .banner-image-bg {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 118px;
      height: 100px;
      background: url(${sprite_cover}) no-repeat 0 -570px;
      &:hover {
        cursor: pointer;
        .image-icon-play {
          display: block;
          position: absolute;
          left: 72px;
          width: 22px;
          height: 22px;
          right: 10px;
          bottom: 5px;
          background: url(${sprite_icon}) no-repeat 0 -110px;
        }
      }
    }
    .image-icon-play {
      display: none;
    }
    .item-album-name,
    .item-singer-name {
      line-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .item-album-name {
      color: #000;
    }
    .item-singer-name {
      color: #666;
    }
  }
`;

export { BannerWrappers, BannerControls, BannerContent };

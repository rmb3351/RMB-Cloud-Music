import styled from "styled-components";
import bannerSprite from "assets/imgs/banner_sprite.png";

const BannerWrappers = styled.div``;

const BannerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-arr,
  .right-arr {
    display: block;
    width: 37px;
    height: 63px;
    background: url(${bannerSprite});
  }
  .left-arr {
    background-position: 0 -360px;
    &:hover {
      cursor: pointer;
      background-position: 0 -434px;
    }
  }
  .right-arr {
    background-position: 0 -508px;
    &:hover {
      cursor: pointer;
      background-position: 0 -580px;
    }
  }
`;

const BannerContent = styled.div`
  position: relative;
  display: flex;
  width: 730px;
  height: 285px;
  overflow: hidden;
  .banner-item {
    width: 730px;
    height: 285px;
    .banner-image {
      width: 100%;
      height: 285px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .dots {
    position: absolute;
    top: 259px;
    left: 0;
    width: 730px;
    height: 20px;
    text-align: center;
    .dot-li {
      display: inline-block;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      :hover {
        cursor: pointer;
        .dot {
          background-color: rgb(198, 12, 12);
        }
      }
      .dot {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 7px;
        background-color: rgb(217, 232, 244);
      }
      .active {
        background-color: rgb(198, 12, 12);
      }
    }
  }
`;

export { BannerWrappers, BannerControls, BannerContent };

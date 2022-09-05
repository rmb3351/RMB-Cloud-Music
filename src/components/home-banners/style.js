import styled from "styled-components";
import download from "assets/imgs/download.png";

const BannerWrappers = styled.div`
  width: 100%;
`;

const BannerContent = styled.div`
  position: relative;
  display: flex;
`;

const ContentLeft = styled.div`
  position: relative;
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
const ContentRight = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 285px;
  background: url(${download}) no-repeat 0 0px;
  .btn {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
  }
  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
`;

export { BannerWrappers, BannerContent, ContentLeft, ContentRight };

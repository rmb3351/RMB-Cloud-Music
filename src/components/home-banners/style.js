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
  .banner-item {
    overflow: hidden;
    width: 730px;
    height: 285px;
    position: absolute;
    top: 0;
    left: 0;
    .banner-image {
      width: 100%;
      height: 285px;
      &:hover {
        cursor: pointer;
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

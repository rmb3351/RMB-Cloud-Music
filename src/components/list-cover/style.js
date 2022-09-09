import styled from "styled-components";
import cover from "assets/imgs/sprite_cover.png";
import icon from "assets/imgs/sprite_icon.png";

const CoverWrapper = styled.div``;

const CoverUpPart = styled.div`
  position: relative;
  .up-part-cover:hover {
    cursor: pointer;
  }
  .up-part-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-color: blue;
    background: url(${cover}) no-repeat 0 -537px;
    color: #ccc;
    .bottom-icon-headset {
      float: left;
      width: 14px;
      height: 11px;
      background: url(${icon}) no-repeat 0 -24px;
      margin: 9px 5px 9px 10px;
    }
    .bottom-count-text {
      float: left;
      margin: 7px 0 0 0;
    }
    .bottom-icon-play {
      position: absolute;
      right: 10px;
      bottom: 5px;
      width: 16px;
      height: 17px;
      background: url(${icon}) no-repeat;
      &:hover {
        cursor: pointer;
        background-position: 0 -60px;
      }
    }
  }
`;

const CoverDownPart = styled.div`
  .down-part-paragraph {
    display: block;
    margin: 8px 0 3px;
    font-size: 14px;
    .down-part-title {
      display: inline-block;
      max-width: 100%;
      vertical-align: middle;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
export { CoverWrapper, CoverUpPart, CoverDownPart };

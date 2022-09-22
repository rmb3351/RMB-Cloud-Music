import styled from "styled-components";
import playbar_sprite from "assets/imgs/playbar_sprite.png";

import cover from "assets/imgs/sprite_cover.png";
import sprite_02 from "assets/imgs/sprite_02.png";
import sprite_icon2 from "assets/imgs/sprite_icon2.png";

const BarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 53px;
  background: url(${playbar_sprite}) repeat-x 0 0;
`;

const BarContent = styled.div`
  display: flex;
  margin-top: 6px;
  height: 47px;
`;

const BarControls = styled.div`
  width: 137px;
  height: 36px;
  padding-top: 6px;
  display: flex;
  align-content: center;
  button {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    background: url(${playbar_sprite});
    background-repeat: no-repeat;
  }
  .prev {
    background-position: 0 -130px;
    &:hover {
      cursor: pointer;
      background-position: -30px -130px;
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      cursor: pointer;
      background-position: -110px -130px;
    }
  }
  .play {
    width: 36px;
    height: 36px;
    margin-top: 0;
    background-position: 0 -204px;
    &:hover {
      cursor: pointer;
      background-position: -40px -204px;
    }
  }
`;

const BarCentral = styled.div`
  display: flex;
  width: 615px;
  height: 37px;
  .central-left {
    position: relative;
    margin-top: 6px;
    margin-right: 15px;
    img {
      width: 34px;
    }
    .album-mask {
      position: absolute;
      top: 6px;
      left: 0;
      display: block;
      width: 34px;
      height: 35px;
    }
  }
  .central-right {
    .central-right__top {
      display: flex;
      height: 28px;
      line-height: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      .song-name {
        max-width: 300px;
        font-size: 12px;
        color: #e8e8e8;
      }
      .song-artist {
        max-width: 220px;
        margin-left: 15px;
        color: #9b9b9b;
      }
      .song-source {
        margin-top: 7px;
        margin-left: 15px;
        display: block;
        width: 15px;
        height: 15px;
        background: url(${playbar_sprite}) no-repeat -110px -103px;
        &:hover {
          background: url(${playbar_sprite}) no-repeat -130px -103px;
        }
      }
    }
    .central-right__bottom {
      height: 13px;
      .progress-bar {
        width: 500px;
        height: 13px;
      }
    }
  }
`;

const BarChoices = styled.div``;

export { BarWrapper, BarControls, BarChoices, BarCentral, BarContent };

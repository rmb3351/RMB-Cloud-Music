import styled from "styled-components";
import playbar_sprite from "assets/imgs/playbar_sprite.png";
import sprite_icon from "assets/imgs/sprite_icon.png";
import sprite_lyrics from "assets/imgs/sprite_lyrics.png";
import progress_bar from "assets/imgs/progress_bar.png";

import cover from "assets/imgs/sprite_cover.png";

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
  width: 630px;
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
      position: relative;
      height: 13px;
      .slider {
        width: 466px;
        height: 9px;
        margin: 0;
        padding: 0;
        &:hover {
          cursor: default;
        }
        .ant-slider-rail {
          height: 9px;
          border-radius: 9px;
          background: url(${progress_bar}) no-repeat;
        }
        .ant-slider-track {
          position: absolute;
          height: 9px;
          background: url(${progress_bar}) no-repeat left -66px;
          border-radius: 9px;
        }
        .ant-slider-handle {
          position: absolute;
          top: -3px;
          width: 22px;
          height: 24px;
          border: none;
          background: url(${sprite_icon}) no-repeat 0 -250px;
          &:hover {
            cursor: default;
            background-position: 0 -280px;
          }
          &:focus {
            box-shadow: none;
          }
        }
      }
    }
    .song-time {
      position: absolute;
      top: -3px;
      right: -84px;
      color: #797979;
      text-shadow: 0 1px 0 #121212;
      em {
        color: #a1a1a1;
      }
    }
  }
`;

const BarChoices = styled.div`
  display: flex;
  width: 213px;
  height: 36px;
  .left-choices {
    width: 87px;
    height: 100%;
    display: flex;
    a {
      margin-top: 11px;
      margin-right: 2px;
      display: block;
      width: 25px;
      height: 25px;
      background: url(${playbar_sprite}) no-repeat;
    }
    .choice-lyrics {
      background: url(${sprite_lyrics}) no-repeat;
      :hover {
        background-position-y: -25px;
      }
    }
    .choice-collect {
      background-position: -88px -163px;
      &:hover {
        background-position-y: -189px;
      }
    }
    .choice-share {
      background-position: -114px -163px;
      &:hover {
        background-position-y: -189px;
      }
    }
  }
  .right-choices {
    flex: 1;
    height: 100%;
    padding-left: 13px;
    background-color: green;
  }
`;

export { BarWrapper, BarControls, BarChoices, BarCentral, BarContent };

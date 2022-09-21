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
  zoom: 1;
  background: url(${playbar_sprite}) repeat-x 0 0;
`;

const BarContent = styled.div`
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

const BarCentral = styled.div``;

const BarChoices = styled.div``;

export { BarWrapper, BarControls, BarChoices, BarCentral, BarContent };

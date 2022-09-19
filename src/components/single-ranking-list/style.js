import styled from "styled-components";
import cover from "assets/imgs/sprite_cover.png";
import sprite_02 from "assets/imgs/sprite_02.png";

const ListWrapper = styled.div``;

const ListHeader = styled.div`
  padding-top: 20px;
  padding-left: 19px;
  position: relative;
  width: 211px;
  height: 100px;
  display: flex;
`;
const HeaderImg = styled.div`
  width: 80px;
  height: 80px;
  .cover-img {
    width: 80px;
  }
  .img-mask {
    position: absolute;
    top: 20px;
    left: 19px;
    display: block;
    width: 80px;
    height: 80px;
    background: url(${cover}) no-repeat -145px -57px;
  }
`;
const HeaderOthers = styled.div`
  margin-top: 6px;
  margin-left: 10px;
  width: 116px;
  height: 52px;
  .list-title {
    color: #333;
  }
  .header-btns {
    margin-top: 10px;
    a {
      margin-right: 10px;
      display: inline-block;
      width: 22px;
      height: 22px;
      background: url(${sprite_02}) no-repeat;
    }
    .play-btn {
      background-position: -267px -205px;
      &:hover {
        background-position: -267px -235px;
      }
    }
    .collect-btn {
      background-position: -300px -205px;
      &:hover {
        background-position: -300px -235px;
      }
    }
  }
`;

const ListContents = styled.div`
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
const ListFooter = styled.div`
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
export {
  ListWrapper,
  ListHeader,
  ListContents,
  ListFooter,
  HeaderImg,
  HeaderOthers,
};

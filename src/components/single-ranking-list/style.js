import styled from "styled-components";
import cover from "assets/imgs/sprite_cover.png";
import sprite_02 from "assets/imgs/sprite_02.png";
import sprite_icon2 from "assets/imgs/sprite_icon2.png";

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
  margin-left: 50px;
  .song-list {
    .song-item {
      display: flex;
      width: 180px;
      height: 32px;
      line-height: 32px;
      .song-no {
        display: block;
        width: 35px;
        height: 32px;
        margin-left: -35px;
        text-align: center;
        color: black;
        font-size: 16px;
        color: #c10d0c;
      }
      .song-name__link {
        display: block;
        max-width: 170px;
        height: 32px;
        flex: 1;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      .operation-btns {
        display: none;
        width: 82px;
        margin-top: 7px;
        a {
          margin-right: 10px;
          display: inline-block;
          width: 17px;
          height: 17px;
          background: url(${sprite_02}) no-repeat;
        }
        .play-btn {
          background-position: -267px -268px;
          &:hover {
            background-position: -267px -288px;
          }
        }
        .collect-btn {
          background-position: -297px -268px;
          &:hover {
            background-position: -297px -288px;
          }
        }
        .add-btn {
          margin-right: 6px;
          background: url(${sprite_icon2}) no-repeat;
          background-position: 0 -698px;
          &:hover {
            background-position: -22px -698px;
          }
        }
      }
      &:nth-child(n + 4) {
        .song-no {
          color: #666;
        }
      }
      &:hover {
        .operation-btns {
          display: block;
        }
      }
    }
  }
`;
const ListFooter = styled.div`
  width: 198px;
  height: 32px;
  line-height: 32px;
  position: relative;
  .footer-link {
    position: absolute;
    right: 0;
    top: 0;
    color: #333;
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

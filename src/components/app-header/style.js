import styled from "styled-components";
import sprite01 from "assets/imgs/sprite_01.png";

const HeaderWrapper = styled.div`
  background-color: #242424;
  height: 75px;
  .content {
    height: 70px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background: #c20c0c;
  }
`;

const ContentLeft = styled.div`
  display: flex;
  .logo {
    /* 设置a标签为block才能设置大小 */
    display: block;
    width: 177px;
    height: 69px;
    background-position: 0 0;
    text-indent: -99999px;
  }
  ul {
    display: flex;
    li {
      position: relative;
      /* 导航li里的每个a标签的样式和hover样式 */
      a {
        display: block;
        height: 100%;
        padding: 0 19px;
        color: #ccc;
        font-size: 14px;
      }
      &:hover {
        a {
          background: #000;
          color: #fff;
          text-decoration: none;
        }
      }
      &:last-child::after {
        display: block;
        position: absolute;
        top: 21px;
        left: 100px;
        content: "";
        width: 28px;
        height: 19px;
        background: url(${sprite01}) no-repeat -190px 0;
      }
    }
  }
`;

const ContentRight = styled.div`
  display: flex;
  .searchbar-box {
    position: relative;
    display: flex;
    width: 158px;
    height: 32px;
    margin-top: 19px;
    background-color: #fff;
    border-radius: 32px;
    background-image: url(${sprite01});
    background-position: 0 -99px;
    .search {
      width: 70%;
      height: 50%;
      margin: 8px 0 0 30px;
    }
  }

  .center-btn {
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 16px;
    line-height: 33px;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    color: #fff;
    &:hover {
      cursor: pointer;
      border-color: #fff;
    }
  }

  .login-btn {
    width: 28px;
    height: 45px;
    line-height: 25px;
    margin: 23px 0 0 20px;
    padding-right: 22px;
    color: #787878;
    &:hover {
      cursor: pointer;
      color: #fff;
      text-decoration: underline;
    }
  }
`;
export { HeaderWrapper, ContentLeft, ContentRight };

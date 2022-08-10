import styled from "styled-components";
import sprite01 from "@/assets/imgs/sprite_01.png";

const FooterWrapper = styled.div`
  background-color: #f2f2f2;
  height: 172px;
  border-top: 1px solid #d3d3d3;
  .content {
    height: 115px;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    &:nth-child(n) {
      color: #666;
      height: 24px;
      line-height: 24px;
    }
  }
`;

const ContentLeft = styled.div`
  ul {
    display: flex;
    li {
      transform: translateX(-6px);
      /* 底部li里的每个a标签的样式和hover样式 */
      a {
        color: #999;
        border-right: 1px solid #999;
        padding: 0 6px;
        font-size: 12px;
      }
      &:last-child a {
        border: 0;
      }
      &:hover {
        a {
          text-decoration: underline;
        }
      }
    }
  }
  .sec-line {
    .copyright {
      margin-right: 14px;
    }
    .certificate:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .third-line {
    line-height: 28px;
    .git-icon {
      margin-left: 10px;
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url(https://portrait.gitee.com/uploads/avatars/user/3285/9857196_rmb3351_1640772710.png!avatar30)
        no-repeat;
      background-size: contain;
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
export { FooterWrapper, ContentLeft, ContentRight };

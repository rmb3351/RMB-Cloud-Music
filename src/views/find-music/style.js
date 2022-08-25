import styled from "styled-components";

const DiscoverWrapper = styled.div`
  background-color: #c20c0c;
`;

const TopMenu = styled.div`
  box-sizing: border-box;
  height: 34px;
  padding-left: 180px;
  display: flex;
  ul {
    display: flex;
    width: 564px;
    li {
      height: 34px;
      line-height: 34px;
      margin: 0 17px;
      a {
        display: inline-block;
        padding: 0 13px;
        text-decoration: none;
        height: 21px;
        line-height: 21px;
        color: #fff;
        &:hover {
          border-radius: 20px;
          background: #9b0909;
        }
      }
    }
  }
`;

const MenuItemContent = styled.div`
  display: flex;
  background-color: #fff;
  .searchbar-box {
    position: relative;
    display: flex;
    width: 158px;
    height: 32px;
    margin-top: 19px;
    background-color: #fff;
    border-radius: 32px;
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
export { DiscoverWrapper, TopMenu, MenuItemContent };

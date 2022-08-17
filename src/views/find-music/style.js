import styled from "styled-components";

const DiscoverWrapper = styled.div`
  background-color: #c20c0c;
  height: 34px;
`;

const TopMenu = styled.div`
  box-sizing: border-box;
  padding-left: 180px;
  display: flex;
  ul {
    display: flex;
    width: 564px;
    li {
      margin: 0 17px;
      padding: 0 13px;
      a {
        line-height: 34px;
        height: 34px;
      }
    }
  }
`;

const MenuItemContent = styled.div`
  display: flex;
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

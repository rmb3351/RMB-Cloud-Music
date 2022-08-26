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
  background-color: rgb(245, 245, 245);
`;
export { DiscoverWrapper, TopMenu, MenuItemContent };

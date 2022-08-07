import styled from "styled-components";

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
  a:nth-child(n + 2) {
    padding: 0 19px;
    color: #ccc;
    font-size: 14px;
  }
  a:nth-child(n + 2):hover {
    background: #000;
    color: #fff;
    text-decoration: none;
  }
  .logo {
    /* 设置a标签为block才能设置大小 */
    display: block;
    width: 177px;
    height: 69px;
    background-position: 0 0;
  }
`;

const ContentRight = styled.div``;
export { HeaderWrapper, ContentLeft, ContentRight };

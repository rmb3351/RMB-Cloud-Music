import styled from "styled-components";
import sprite02 from "assets/imgs/sprite_02.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 0 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  .left-circle {
    width: 34px;
    height: 34px;
    background: url(${sprite02}) no-repeat -225px -156px;
  }
  .header-title {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    &:hover {
      cursor: pointer;
    }
  }
  .header-tabs {
    display: flex;
    margin: 7px 0 0 20px;
    color: #666;
    .tab-text:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .header-divider {
      margin: 0 14px;
    }
  }
`;

const HeaderRight = styled.div`
  .more {
    .cor {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background: url(${sprite02}) no-repeat 0 -240px;
    }
  }
`;
export { HeaderWrapper, HeaderLeft, HeaderRight };

import styled from "styled-components";
import sprite02 from "assets/imgs/sprite_02.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
`;

const HeaderLeft = styled.div`
  display: flex;
  ul {
    display: flex;
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

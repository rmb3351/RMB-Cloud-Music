import styled from "styled-components";

const HotWrapper = styled.div`
  width: 100%;
  margin-bottom: 35px;
`;

const HotContent = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-left: -42px;
    margin-top: 20px;
    li {
      width: 140px;
      height: 204px;
      padding-left: 42px;
      padding-bottom: 30px;
    }
  }
`;

export { HotWrapper, HotContent };

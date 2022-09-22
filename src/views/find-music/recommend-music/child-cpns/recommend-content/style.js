import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  background: #fff;
`;

const ContentLeft = styled.div`
  width: 729px;
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 40px;
  border: 1px solid #d3d3d3;
`;
const ContentRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  .ant-slider-horizontal,
  .ant-slider-rail,
  .ant-slider-track,
  .ant-slider-step,
  .ant-slider-handle {
    height: 20px;
  }
`;

export { ContentWrapper, ContentLeft, ContentRight };

import styled from "styled-components";
import rcmBg from "assets/imgs/recommend-top-bg.png";

const RankingWrapper = styled.div`
  width: 100%;
  .ranking-content {
    margin-top: 20px;
    width: 689px;
    height: 472px;
    box-sizing: border-box;
    background: url(${rcmBg});
    display: flex;
  }
`;

export { RankingWrapper };

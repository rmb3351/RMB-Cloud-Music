import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { RankingWrapper } from "./style";
import RMBRcmHeader from "components/recommend-header";
import RMBSingleRankingList from "components/single-ranking-list";
import { getAllListsAction } from "views/find-music/store/actionCreators";

const RankingList = memo(() => {
  const { listsData } = useSelector(
    (state) => ({ listsData: state.getIn(["findMusic", "listsData"]) }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    /* 获取所有榜单信息，然后在actionCreator里分别获取飙升、新歌、原创三个榜单的信息 */
    dispatch(getAllListsAction());
  }, [dispatch]);
  return (
    <RankingWrapper>
      <RMBRcmHeader title="榜单"></RMBRcmHeader>
      <ul className="ranking-content">
        {Object.values(listsData).map((data) => (
          <li key={data.id}>
            <RMBSingleRankingList info={data}></RMBSingleRankingList>
          </li>
        ))}
      </ul>
    </RankingWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(RankingList);

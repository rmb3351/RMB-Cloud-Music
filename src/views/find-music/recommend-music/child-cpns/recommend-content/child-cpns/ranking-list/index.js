import React, { memo, useEffect } from "react";

import { RankingWrapper } from "./style";
import RMBRcmHeader from "components/recommend-header";
import { useDispatch } from "react-redux";
import { getAllListsAction } from "../../../../../store/actionCreators";

const RankingList = memo(() => {
  console.log("重新渲染");
  const dispatch = useDispatch();
  useEffect(() => {
    /* 获取所有榜单信息，然后在actionCreator里分别获取飙升、新歌、原创三个榜单的信息 */
    dispatch(getAllListsAction());
  }, [dispatch]);
  return (
    <RankingWrapper>
      <RMBRcmHeader title="榜单"></RMBRcmHeader>
    </RankingWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(RankingList);

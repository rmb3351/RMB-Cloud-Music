import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HotWrapper, HotContent } from "./style";
import RMBRcmHeader from "components/recommend-header";
import RMBListCover from "components/list-cover";
import { getSongListsAction } from "views/find-music/store/actionCreators";

const HotRecommend = memo(() => {
  /* 解构获取state中songLists的对应数据 */
  const { songLists } = useSelector(
    (state) => ({ songLists: state.getIn(["findMusic", "songLists"]) }),
    shallowEqual
  );
  /* 获取songlists的数据 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongListsAction());
  }, [dispatch]);
  return (
    <HotWrapper>
      <RMBRcmHeader
        title="热门推荐"
        categories={["华语", "流行", "摇滚", "民谣", "电子"]}
      ></RMBRcmHeader>
      <HotContent>
        <ul>
          {songLists.map((list) => (
            <li key={list.id}>
              <RMBListCover info={list}></RMBListCover>
            </li>
          ))}
        </ul>
      </HotContent>
    </HotWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(HotRecommend);

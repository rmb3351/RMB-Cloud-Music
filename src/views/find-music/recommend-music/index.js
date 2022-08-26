import React, { memo, useEffect } from "react";
// shallowEqual是类似connect的mapStateToProps中优化的浅层比较函数：如果只是对对象做修改，不是整个重新赋值，则不重新渲染
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHomeBannersAction } from "../store/actionCreators";
import { RecommendWrapper } from "./style";
const RecommendMusic = memo(() => {
  // state.findMusic是src/store/reducer.js里combinedReducer里发现音乐部分的reducer
  const { homeBanners } = useSelector(
    (state) => ({
      homeBanners: state.findMusic.homeBanners,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeBannersAction());
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <h2>这里是推荐页面</h2>
      {homeBanners.map((banner, index) => (
        <div key={index}>{JSON.stringify(banner)}</div>
      ))}
    </RecommendWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(RecommendMusic);

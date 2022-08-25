import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { getHomeBannersAction } from "./store/actionCreators";
import { RecommendWrapper } from "./style";
const RecommendMusic = memo((props) => {
  const { getHomeBanners, homeBanners } = props;
  useEffect(() => {
    getHomeBanners();
  }, [getHomeBanners]);
  return (
    <RecommendWrapper>
      <h2>这里是推荐页面</h2>
      {homeBanners.map((banner) => (
        <div>{JSON.stringify(banner)}</div>
      ))}
    </RecommendWrapper>
  );
});

/* 把获取redux请求获取到的banners数据映射到props里 */
const mapStateToProps = (state) => ({
  // state.recommend是src/store/reducer.js里combinedReducer里发现音乐部分的reducer
  homeBanners: state.recommend.homeBanners,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeBanners() {
    dispatch(getHomeBannersAction());
  },
});

/* 导出被connect和memo分别包装的RecommendMusic */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(RecommendMusic));

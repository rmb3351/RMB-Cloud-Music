import React, { memo, useEffect } from "react";
// shallowEqual是类似connect的mapStateToProps中优化的浅层比较函数：如果只是对对象做修改，不是整个重新赋值，则不重新渲染
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";

import { getHomeBannersAction } from "views/find-music/store/actionCreators";
import {
  BannerContent,
  BannerWrappers,
  ContentLeft,
  ContentRight,
} from "./style";
const HomeBanners = memo(() => {
  // state.findMusic是src/store/reducer.js里combinedReducer里发现音乐部分的reducer
  const { homeBanners } = useSelector(
    (state) => ({
      // 这里的state和state下一级的对象都变成了immutable对象，都要直接用api
      // homeBanners: state.get("findMusic").get("homeBanners"),
      // getIn:传入数组，顺序读取对应属性
      homeBanners: state.getIn(["findMusic", "homeBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeBannersAction());
  }, [dispatch]);
  return (
    <BannerWrappers>
      <BannerContent className="wrap-v2">
        {/* {homeBanners.map((banner, index) => (
          <div key={index}>{JSON.stringify(banner)}</div>
        ))} */}
        <ContentLeft>
          <Carousel autoplay effect="fade">
            <div>
              <h3 className="contentStyle">1</h3>
            </div>
            <div>
              <h3 className="contentStyle">2</h3>
            </div>
            <div>
              <h3 className="contentStyle">3</h3>
            </div>
            <div>
              <h3 className="contentStyle">4</h3>
            </div>
          </Carousel>
        </ContentLeft>
        <ContentRight>
          <a
            id="side-download"
            href="/download"
            className="btn"
            hidefocus="true"
          >
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </ContentRight>
      </BannerContent>
    </BannerWrappers>
  );
});

/* 导出被memo包装的HomeBanners */
export default memo(HomeBanners);

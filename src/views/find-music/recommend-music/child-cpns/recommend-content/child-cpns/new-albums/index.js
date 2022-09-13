import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { NewAlbumsWrapper, NewAlbumsContent } from "./style";
import RMBRcmHeader from "components/recommend-header";
import { getNewAlbumsAction } from "views/find-music/store/actionCreators";
import NewAlbumBanners from "./child-cpns/new-album-banners";

const NewAlbums = memo(() => {
  const { newAlbums } = useSelector(
    (state) => ({ newAlbums: state.getIn(["findMusic", "newAlbums"]) }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumsAction());
  }, [dispatch]);

  return (
    <NewAlbumsWrapper>
      <RMBRcmHeader title="新碟上架"></RMBRcmHeader>
      <NewAlbumsContent>
        <NewAlbumBanners newAlbums={newAlbums}></NewAlbumBanners>
      </NewAlbumsContent>
    </NewAlbumsWrapper>
  );
});

/* 导出被memo包装的RecommendMusic */
export default memo(NewAlbums);

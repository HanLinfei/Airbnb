import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DetailPictures from "./cpns/detail-pictures";
import { DetailWrapper } from "./style";
const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }));
  }, []);
  return (
    <DetailWrapper>
      <AppHeader />
      <div className="picture-list">
        <DetailPictures pictureData={detailInfo}></DetailPictures>
      </div>
    </DetailWrapper>
  );
});

export default Detail;

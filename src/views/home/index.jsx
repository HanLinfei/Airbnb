import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";

import {
  fetchHomeDataGoodPriceAction,
  fetchHomeDataHighScoreAction,
  fetchHomeDataDiscountAction,
  fetchHomeDataRecommendAction,
  fetchHomeLongforAction,
} from "@/store/modules/home";

import HomeSectionV1 from "./c-cpns/home-section-v1";

import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObject } from "@/utils/isEmptyObject";
import HomeSectionLongfor from "./c-cpns/home-section-longfor";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 获取房间列表数据
    dispatch(fetchHomeDataGoodPriceAction());
    dispatch(fetchHomeDataHighScoreAction());
    dispatch(fetchHomeDataDiscountAction());
    dispatch(fetchHomeDataRecommendAction());
    dispatch(fetchHomeLongforAction());
    // eslint-disable-next-line
  }, []);
  // 映射store中的状态
  const {
    goodPriceInfo,
    highScoreInfo,
    goodDiscountInfo,
    goodRecommendInfo,
    goodLongfor,
  } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.goodHighScoreInfo,
      goodDiscountInfo: state.home.goodDiscountInfo,
      goodRecommendInfo: state.home.goodRecommend,
      goodLongfor: state.home.goodLongfor,
    };
  }, shallowEqual);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObject(goodDiscountInfo) && (
          <HomeSectionV2 HomeRoomDataInfo={goodDiscountInfo} />
        )}
        {isEmptyObject(goodRecommendInfo) && (
          <HomeSectionV2 HomeRoomDataInfo={goodRecommendInfo} />
        )}
        {isEmptyObject(goodLongfor) && (
          <HomeSectionLongfor dataInfo={goodLongfor} />
        )}
        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 HomeRoomDataInfo={goodPriceInfo} />
        )}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 HomeRoomDataInfo={highScoreInfo} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;

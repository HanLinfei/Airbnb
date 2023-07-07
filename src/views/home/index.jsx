import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
const Home = memo(() => {
  const dispatch = useDispatch();
  // 映射state中的goodPriceInfo状态到该组件
  const { goodPriceInfo } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
    };
  }, shallowEqual);
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <SectionHeader title={goodPriceInfo.title} />
      </div>
    </HomeWrapper>
  );
});

export default Home;

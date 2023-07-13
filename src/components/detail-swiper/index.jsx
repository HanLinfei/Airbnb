import React, { memo, useRef } from "react";
import { DetailSwiperWrapper } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconAreaLeft from "@/assets/svg/IconAreaLeft";
import IconAreaRight from "@/assets/svg/IconAreaRight";

const DetailSwiper = memo((props) => {
  const { itemData, swiperSettings } = props;
  const swiperRef = useRef();
  const controlClickHandle = (isPrev) => {
    isPrev ? swiperRef.current.slickPrev() : swiperRef.current.slickNext();
  };
  return (
    <DetailSwiperWrapper>
      <div className="swiper">
        <Slider {...swiperSettings} ref={swiperRef}>
          {itemData.picture_urls.map((item, index) => {
            return (
              <div key={item}>
                <div className="cover">
                  <img className="room-img" src={item} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="control">
        <div className="arrow-left" onClick={() => controlClickHandle(true)}>
          <IconAreaLeft width="32" height="32" />
        </div>
        <div className="arrow-right" onClick={() => controlClickHandle()}>
          <IconAreaRight width="32" height="32" />
        </div>
      </div>
    </DetailSwiperWrapper>
  );
});

export default DetailSwiper;

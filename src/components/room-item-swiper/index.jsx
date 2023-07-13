import React, { memo, useRef } from "react";
import { RoomItemSwiperWrapper } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconAreaLeft from "@/assets/svg/IconAreaLeft";
import IconAreaRight from "@/assets/svg/IconAreaRight";
const RoomItemSwiper = memo((props) => {
  const { itemData, swiperSettings, itemClick } = props;
  const swiperRef = useRef();
  const controlClickHandle = (isPrev) => {
    isPrev ? swiperRef.current.slickPrev() : swiperRef.current.slickNext();
  };
  return (
    <RoomItemSwiperWrapper>
      <Slider {...swiperSettings} ref={swiperRef}>
        {itemData.picture_urls.map((item, index) => {
          return (
            <div key={item}>
              <div className="cover">
                <img className="room-img" src={item} alt="" />
                <div
                  className="content"
                  onClick={() => itemClick && itemClick(itemData)}></div>
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="control">
        <div className="arrow-left" onClick={() => controlClickHandle(true)}>
          <IconAreaLeft width="16" height="16" />
        </div>
        <div className="arrow-right" onClick={() => controlClickHandle()}>
          <IconAreaRight width="16" height="16" />
        </div>
      </div>
    </RoomItemSwiperWrapper>
  );
});

export default RoomItemSwiper;

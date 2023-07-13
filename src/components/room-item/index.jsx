import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RoomItemWrapper } from "./style";
import RoomItemSwiper from "../room-item-swiper";
import { changeDetailInfoAction } from "@/store/modules/detail";
const RoomItem = memo((props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemData, isSwiper } = props;
  const swiperSettings = {
    speed: 500,
    arrows: false,
  };

  const itemDetailClickHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item));
    window.scrollTo(0, 0);
    navigate("/detail");
  }, []);

  return (
    <RoomItemWrapper className="room-item">
      {isSwiper && (
        <RoomItemSwiper
          itemData={itemData}
          swiperSettings={swiperSettings}
          itemClick={itemDetailClickHandle}></RoomItemSwiper>
      )}
      <div>
        {!isSwiper && (
          <div className="cover" key={itemData.picture_url}>
            <img className="room-img" src={itemData.picture_url} alt="" />
          </div>
        )}
        <span className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </span>
        <p className="title">{itemData.name}</p>
        <p className="price">{itemData.price_format + "/晚"}</p>
      </div>
    </RoomItemWrapper>
  );
});

export default RoomItem;

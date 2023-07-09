import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
const RoomItem = memo((props) => {
  const { itemData } = props;

  return (
    <RoomItemWrapper className="room-item">
      <div className="cover">
        <img className="room-img" src={itemData.picture_url} alt="" />
      </div>
      <span className="desc">{itemData.verify_info.messages.join(" · ")}</span>
      <p className="title">{itemData.name}</p>
      <p className="price">{itemData.price_format + "/晚"}</p>
    </RoomItemWrapper>
  );
});

export default RoomItem;

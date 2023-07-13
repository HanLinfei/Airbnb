import React, { memo } from "react";
import RoomsWrapper from "./style";
import RoomItem from "../room-item";
const SectionRoomsEntire = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <RoomsWrapper className="room-list" itemWidth={itemWidth}>
      {roomList.map((item, index) => {
        return <RoomItem itemData={item} key={item._id} isSwiper={true} />;
      })}
    </RoomsWrapper>
  );
});

export default SectionRoomsEntire;

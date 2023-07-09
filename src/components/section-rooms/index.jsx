import React, { memo } from "react";
import RoomsWrapper from "./style";
import RoomItem from "../room-item";
const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <RoomsWrapper className="room-list" itemWidth={itemWidth}>
      {roomList?.slice(0, 8).map((item, index) => {
        return <RoomItem itemData={item} key={index} />;
      })}
    </RoomsWrapper>
  );
});

export default SectionRooms;

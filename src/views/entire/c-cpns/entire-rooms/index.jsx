import React, { memo } from "react";
import { EntireRoomsWrapper } from "./style";
import SectionRoomsEntire from "@/components/section-rooms-entire";
import { useSelector } from "react-redux";
const EntireRooms = memo((props) => {
  const { roomList } = props;
  const { isLoading } = useSelector((state) => {
    return {
      isLoading: state.entire.isLoading,
    };
  });
  return (
    <EntireRoomsWrapper>
      <div className="rooms">
        <SectionRoomsEntire roomList={roomList.list} itemWidth="20%" />
        {isLoading && <div className="cover"></div>}
      </div>
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;

import React, { memo } from "react";
import { HomeSectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
const HomeSectionV1 = memo((props) => {
  const { HomeRoomDataInfo } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader
        title={HomeRoomDataInfo.title}
        subtitle={HomeRoomDataInfo.subtitle}
      />
      <SectionRooms roomList={HomeRoomDataInfo.list} itemWidth="25%" />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  ); 
});

export default HomeSectionV1;

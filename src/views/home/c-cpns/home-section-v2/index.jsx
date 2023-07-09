import React, { memo, useState, useCallback } from "react";
import { HomeSectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
const HomeSectionV2 = memo((props) => {
  const { HomeRoomDataInfo } = props;
  const initState = Object.keys(HomeRoomDataInfo.dest_list)[0];
  const [tabName, setTabName] = useState(initState);
  // 处理子元素单击事件
  const handleChildItemTabClick = useCallback((index, item) => {
    setTabName(item);
  }, []);
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader
        title={HomeRoomDataInfo.title}
        subtitle={HomeRoomDataInfo.subtitle}
      />
      <SectionTabs
        tabNames={Object.keys(HomeRoomDataInfo.dest_list)}
        handleChildItemTabClick={handleChildItemTabClick}
      />
      <SectionRooms
        roomList={HomeRoomDataInfo.dest_list[tabName]}
        itemWidth="33.333%"
      />
      <SectionFooter title={tabName} />
    </HomeSectionV2Wrapper>
  );
});

export default HomeSectionV2;

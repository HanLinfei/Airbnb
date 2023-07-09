import SectionHeader from "@/components/section-header";
import React, { memo } from "react";
import { HomeSectionV1Wrapper } from "../home-section-v1/style";
import LongforItem from "@/components/longfor-item";
import { HomeSectionLongforWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";
const HomeSectionLongfor = memo((props) => {
  const { dataInfo } = props;
  return (
    <HomeSectionLongforWrapper>
      <HomeSectionV1Wrapper>
        <SectionHeader
          title={dataInfo.title}
          subtitle={dataInfo.subtitle}></SectionHeader>
        <div className="longfor-list">
          <ScrollView>
            {dataInfo.list.map((item, index) => {
              return <LongforItem dataInfo={item} key={item.city} />;
            })}
          </ScrollView>
        </div>
      </HomeSectionV1Wrapper>
    </HomeSectionLongforWrapper>
  );
});

export default HomeSectionLongfor;

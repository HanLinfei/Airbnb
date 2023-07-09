import React, { memo, useState } from "react";
import { SectionTabsWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";
const SectionTabs = memo((props) => {
  const { tabNames, handleChildItemTabClick } = props;
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabClick = (index, item) => {
    handleChildItemTabClick(index, item);
    setCurrentTabIndex(index);
  };

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <li
              key={item}
              className={currentTabIndex === index ? "active" : ""}
              onClick={() => handleTabClick(index, item)}>
              {item}
            </li>
          );
        })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

export default SectionTabs;

import IconMore from "@/assets/svg/IconMore";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
const SectionFooter = memo((props) => {
  const { title } = props;
  let moreText = "查看更多";
  moreText = title ? `查看更多${title}房源` : moreText;
  return (
    <SectionFooterWrapper moreTextColor={title ? "#00848a" : "#000"}>
      <div className="info">
        <div className="text">{moreText}</div>
        <div className="icon">
          <IconMore />
        </div>
      </div>
    </SectionFooterWrapper>
  );
});

export default SectionFooter;

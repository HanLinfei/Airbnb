import IconMore from "@/assets/svg/IconMore";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { SectionFooterWrapper } from "./style";
const SectionFooter = memo((props) => {
  const { title } = props;
  let moreText = "查看更多";
  moreText = title ? `查看更多${title}房源` : moreText;
  const navigate = useNavigate();
  function moreClickHandle() {
    navigate("/entire");
    window.scrollTo(0, 0);
  }
  return (
    <SectionFooterWrapper moreTextColor={title ? "#00848a" : "#000"}>
      <div
        className="info"
        onClick={() => {
          moreClickHandle();
        }}>
        <div className="text">{moreText}</div>
        <div className="icon">
          <IconMore />
        </div>
      </div>
    </SectionFooterWrapper>
  );
});

export default SectionFooter;

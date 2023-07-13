import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { LeftWrapper } from "./style";
import IconLog from "@/assets/svg/IconLog";
const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/home");
  };
  return (
    <LeftWrapper>
      <div className="icon" onClick={toHome}>
        <IconLog />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;

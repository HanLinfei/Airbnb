import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLog from "@/assets/svg/IconLog";
const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="icon">
        <IconLog />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;

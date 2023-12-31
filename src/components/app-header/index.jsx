import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper } from "./style";
const AppHeader = memo(() => {
  const {
    headerConfig: { isFixed },
  } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  return (
    <HeaderWrapper className={isFixed ? "fixed" : ""}>
      <div className="header-content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
        <div className="search-area"></div>
      </div>

      {/* <div className="cover"></div> */}
    </HeaderWrapper>
  );
});

export default AppHeader;

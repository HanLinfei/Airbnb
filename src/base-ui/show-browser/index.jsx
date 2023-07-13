import IconClose from "@/assets/svg/IconClose";
import DetailSwiper from "@/components/detail-swiper";
import React, { memo, useEffect } from "react";
import { ShowBrowserWrapper } from "./style";

const ShowBrowser = memo((props) => {
  const { pictures, closeBrowser } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeBtnHandle = () => {
    console.log("object");
    closeBrowser && closeBrowser();
  };
  const swiperSettings = {
    speed: 500,
    arrows: false,
  };
  return (
    <ShowBrowserWrapper>
      <div className="show-browser">
        <div className="top">
          <div className="close-btn" onClick={closeBtnHandle}>
            <IconClose />
          </div>
        </div>
        <div className="content">
          <DetailSwiper itemData={pictures} swiperSettings={swiperSettings} />
        </div>
        <div className="bottom"></div>
      </div>
    </ShowBrowserWrapper>
  );
});

export default ShowBrowser;

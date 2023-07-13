import ShowBrowser from "@/base-ui/show-browser";
import React, { memo, useState } from "react";
import { DetailPricturesWrapper } from "./style";

const DetailPictures = memo((props) => {
  const { pictureData } = props;
  const [showBrowser, setShowBrowser] = useState(false);
  const openImgBroswer = () => {
    document.body.style.overflow = "hidden";
    setShowBrowser(true);
  };
  return (
    <DetailPricturesWrapper>
      <div className="pictures">
        <div className="picture-list">
          <div className="left">
            <div className="img-container" onClick={() => setShowBrowser(true)}>
              <img src={pictureData.picture_urls[0]} alt="" />
            </div>
          </div>
          <div className="right">
            {pictureData.picture_urls.slice(1, 5).map((item, index) => {
              return (
                <div className="img-container" key={item}>
                  <div
                    className="img-animation"
                    onClick={() => setShowBrowser(true)}>
                    <img key={item} src={item} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="show-btn" onClick={openImgBroswer}>
          显示照片
        </div>
      </div>
      {showBrowser && (
        <ShowBrowser
          pictures={pictureData}
          closeBrowser={() => setShowBrowser(false)}
        />
      )}
    </DetailPricturesWrapper>
  );
});

export default DetailPictures;

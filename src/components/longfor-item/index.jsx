import React, { memo } from "react";
import { LongforItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { dataInfo } = props;
  return (
    <LongforItemWrapper>
      <div className="inner">
        <img src={dataInfo.picture_url} alt="" />
        <div className="info">
          <p className="city">{dataInfo.city}</p>
          <p className="price">均价 {dataInfo.price}</p>
        </div>
        <div className="bg-cover"></div>
      </div>
    </LongforItemWrapper>
  );
});

export default LongforItem;

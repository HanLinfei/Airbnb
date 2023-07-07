import React, { memo } from "react";
import FooterWrapper from "./style";
const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="list-column">
          <ul>
            <li>
              <span className="title">爱彼迎</span>
              <span>工作机会</span>
              <span>爱彼迎新闻</span>
              <span>政策</span>
              <span>无障碍设施</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="title">发现</span>
              <span>信任与安全</span>
              <span>旅行基金</span>
              <span>商务差旅</span>
              <span>爱彼迎杂志</span>
              <span>Airbnb.org</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="title">出租</span>
              <span>为什么要出租</span>
              <span>待客之道</span>
              <span>房东义务</span>
              <span>开展体验</span>
              <span>资源中心</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="title">客服支持</span>
              <span>帮助</span>
              <span>邻里支持</span>
            </li>
          </ul>
        </div>
        <div className="desc">
          &copy; 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;

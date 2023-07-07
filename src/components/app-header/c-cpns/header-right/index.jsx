import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconEarth from "@/assets/svg/IconEarth";
import IconMenu from "@/assets/svg/IconMenu";
import IconInfo from "@/assets/svg/IconInfo";
const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  // 副作用
  useEffect(() => {
    // 监听window点击 隐藏panel
    window.addEventListener("click", windowClickHandle);
    // 取消window的事件监听
    return () => {
      window.removeEventListener("click", windowClickHandle);
    };
    function windowClickHandle() {
      setShowPanel(false);
    }
  }, []);

  // 面板的显示与隐藏
  const profileClickHandle = (e) => {
    setShowPanel(!showPanel);
    // 阻止事件冒泡
    e.stopPropagation();
  };
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn-item">登录</span>
        <span className="btn-item">注册</span>
        <span className="btn-item">
          <IconEarth />
        </span>
      </div>
      <div
        className={`profile ${showPanel ? "prifile-active" : ""}`}
        onClick={profileClickHandle}>
        <IconMenu />
        <IconInfo />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="register item">注册</div>
              <div className="login item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;

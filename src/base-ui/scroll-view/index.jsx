import IconAreaLeft from "@/assets/svg/IconAreaLeft";
import IconAreaRight from "@/assets/svg/IconAreaRight";
import React, { memo, useEffect, useState, useRef } from "react";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const positionIndexRef = useRef();
  const tottalDistanceRef = useRef();
  const scrollContentRef = useRef();
  // 组件渲染完毕 判断是否显示右边按钮
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; //本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    tottalDistanceRef.current = totalDistance;
    positionIndexRef.current = 0;
    // scroll宽度是由内容撑起来的 client宽度是盒子本身的宽度
    // 如果内容撑起来的高度大于盒子本身的宽度 则说明是可以滚动的
    totalDistance > 0 ? setShowRight(true) : setShowRight(false);
  }, []);
  // 右边按钮事件处理
  const controlClickHandle = (isRight) => {
    const newIndex = isRight
      ? positionIndexRef.current + 1
      : positionIndexRef.current - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    scrollContentRef.current.style.transform = `translate(-${newEl.offsetLeft}px,0)`;
    positionIndexRef.current = newIndex;
    // 1. 只有当盒子的偏移距离大于可以滚动的偏移距离时隐藏右边按钮 这情况下说明了 盒子的偏移距离已经滚完了可滚动距离 此时盒子已经整个都在视口区域了 后面已经没有元素超出视口区域了 无需继续滚动了
    setShowRight(!(newEl.offsetLeft >= tottalDistanceRef.current));

    // 2.当盒子偏移距离大于0就说明此时已经是滚动过至少一次了 所以此时可以出现左侧按钮了
    setShowLeft(newEl.offsetLeft > 0);
  };

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div onClick={() => controlClickHandle(false)} className="left-btn">
          <IconAreaLeft />
        </div>
      )}

      {showRight && (
        <div onClick={() => controlClickHandle(true)} className="right-btn">
          <IconAreaRight />
        </div>
      )}
      <div className="scroll-conten-wrapper">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;

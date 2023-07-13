import styled from "styled-components";

export const RoomItemSwiperWrapper = styled.div`
  position: relative;
  .cover {
    /* 这个padding的百分比是相当于自身的宽度的 也就是此时设置的padding-top是相对于自身宽度的66% 刚好是三分之二 也就是靠这个padding-top撑开了高度 */
    padding: 66.66% 0 0 0;
    height: 100%;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    .room-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 40px;
      right: 40px;
      z-index: 1;
    }
  }
  .control {
    .arrow-left,
    .arrow-right {
      position: absolute;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      bottom: 0;
      width: 40px;
      color: #fff;
      cursor: pointer;
    }
    .arrow-left {
      left: 0;
      &:hover {
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
    }
    .arrow-right {
      right: 0;
      &:hover {
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
    }
  }
`;

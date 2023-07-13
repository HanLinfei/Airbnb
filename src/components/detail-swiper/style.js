import styled from "styled-components";

export const DetailSwiperWrapper = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  .swiper {
    width: 40%;
    margin: 0 auto;
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
    }
  }
  .control {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .arrow-left,
    .arrow-right {
      position: absolute;
      color: #fff;
      top: 50%;
      transform: translate(0, -50%);
      cursor: pointer;
    }
    .arrow-left {
      left: 30px;
    }
    .arrow-right {
      right: 30px;
    }
  }
`;

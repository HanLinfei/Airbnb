import styled from "styled-components";

export const LongforItemWrapper = styled.li`
  .inner {
    width: 100%;
    position: relative;
    cursor: pointer;
    img {
      border-radius: 4px;
      width: 100%;
    }
    .info {
      position: absolute;
      left: 0;
      bottom: 30px;
      color: #fff;
      left: 50%;
      transform: translate(-50%, 0);
      text-align: center;
      z-index: 1;
      .city {
        font-size: 18px;
      }
      .price {
        margin-top: 6px;
        font-size: 14px;
      }
    }
    .bg-cover {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60%;
      background: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
    }
  }
`;

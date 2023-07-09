import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  .scroll-conten-wrapper {
    overflow: hidden;
  }
  .scroll-content {
    position: relative;
    display: flex;
    transition: transform 250ms ease;
  }
  .left-btn,
  .right-btn {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
    background: #fff;
    z-index: 100;
  }
  .left-btn {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
  .right-btn {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
`;

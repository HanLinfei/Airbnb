import styled from "styled-components";

export const ShowBrowserWrapper = styled.div`
  .show-browser {
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #333;
    z-index: 1000;
    .top {
      height: 86px;
      .close-btn {
        position: absolute;
        top: 30px;
        right: 20px;
        color: #fff;
        cursor: pointer;
      }
      z-index: 999;
    }
    .content {
      width: 100%;
      position: relative;
      margin: 0 auto;
      flex: 1;
    }
    .bottom {
      height: 100px;
      margin-top: 10px;
    }
  }
`;

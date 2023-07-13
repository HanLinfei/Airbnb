import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  z-index: 666;
  .btns {
    display: flex;
    align-items: center;
    .btn-item {
      padding: 12px 15px;
      font-size: 14px;
      color: #484848;
      font-weight: 600;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    width: 77px;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 25px;
    fill: ${(props) => props.theme.textColor.secondary};
    cursor: pointer;
    margin-left: 8px;
    /* 混入鼠标划入阴影 */
    ${(props) => props.theme.mixin.hoverBoxShadow}
    .panel {
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      box-sizing: border-box;
      .item {
        height: 40px;
        line-height: 40px;
        color: #666;
        font-size: 14px;
        font-weight: 600;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
      }
      .top {
        padding: 10px 0;
        padding-bottom: 0;
      }
      .bottom {
        div {
          height: 40px;
        }
      }
    }
  }
  .prifile-active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }
`;

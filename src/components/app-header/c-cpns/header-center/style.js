import styled from "styled-components";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  ${(props) => props.theme.mixin.hoverBoxShadow}
  border:1px solid #ddd;
  border-radius: 24px;
  width: 300px;
  min-width: 200px;
  font-size: 14px;
  color: ${(props) => props.theme.textColor.primary};
  font-weight: 600;
  padding: 0 8px;
  box-sizing: border-box;
  cursor: pointer;
  .text {
    padding: 0 16px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.primary};
    fill: #fff;
    stroke: #fff;
  }
`;

import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
  user-select: none;
  .filter {
    display: flex;
    margin-left: 20px;
    li {
      padding: 10px 20px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-right: 14px;
      cursor: pointer;
      ${(props) => props.theme.mixin.hoverBoxShadow}
    }
    li.active {
      background-color: #00848a;
      color: #fff;
    }
  }
`;

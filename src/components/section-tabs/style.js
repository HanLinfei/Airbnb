import styled from "styled-components";

export const SectionTabsWrapper = styled.ul`
  li {
    flex: 0 0 126px;
    box-sizing: border-box;
    white-space: nowrap;
    margin-right: 16px;
    padding: 14px 16px;
    color: #fff;
    border-radius: 3px;
    text-align: center;
    font-size: 18px;
    color: #484848;
    border: 1px solid #d8d8d8;
    cursor: pointer;
    ${(props) => props.theme.mixin.hoverBoxShadow}
  }
  li.active {
    color: #fff;
    background-color: #00848a;
  }
`;

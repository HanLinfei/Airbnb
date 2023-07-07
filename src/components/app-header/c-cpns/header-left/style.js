import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  .icon {
    cursor: pointer;
    /* Svg颜色 */
    fill: ${(props) => props.theme.color.primary};
  }
`;

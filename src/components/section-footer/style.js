import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  .info {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.moreTextColor};
    cursor: pointer;
    .text {
      margin-right: 6px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

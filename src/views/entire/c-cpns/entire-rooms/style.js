import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  .rooms {
    position: relative;
    > .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.7);
    }
  }
`;

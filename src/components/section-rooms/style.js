import styled from "styled-components";

const RoomsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 0 -8px;
  .room-item {
    width: ${(props) => props.itemWidth};
    padding: 0 8px;
    box-sizing: border-box;
    padding-bottom: 8px;
    cursor: pointer;
  }
`;

export default RoomsWrapper;

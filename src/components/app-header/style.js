import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  z-index: 800;
  background: #fff;
  /* height: 180px; */
  height: 80px;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .header-content {
    padding: 0 80px;
    position: relative;
    z-index: 900;
    background-color: #fff;
    > .top {
      display: flex;
      height: 80px;
      align-items: center;
    }
    /* .search-area {
      height: 100px;
    } */
  }

  .cover {
    position: fixed;
    z-index: 700;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

import styled from "styled-components";

export const RoomItemWrapper = styled.li`
  position: relative;
  .cover {
    /* 这个padding的百分比是相当于自身的宽度的 也就是此时设置的padding-top是相对于自身宽度的66% 刚好是三分之二 也就是靠这个padding-top撑开了高度 */
    padding: 66.66% 0 0 0;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    .room-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    display: block;
    margin: 10px 0 5px 0;
    color: ${(props) => props.theme.textColor.secondary};
    font-size: 12px;
    font-weight: bold;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #484848;
  }
  .price {
    margin: 8px 0;
    font-size: 14px;
    color: #484848;
  }
`;

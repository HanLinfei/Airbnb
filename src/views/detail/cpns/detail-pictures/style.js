import styled from "styled-components";

export const DetailPricturesWrapper = styled.div`
  .pictures {
    position: relative;
    .picture-list {
      width: 100%;
      height: 550px;
      display: flex;
      .left {
        height: 100%;
        flex: 1;
        padding: 2px;
        box-sizing: border-box;

        .img-container {
          box-sizing: border-box;
          flex: 0 0 50%;
          height: 100%;
          cursor: pointer;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
            transition: transform 0.3s ease;
            &:hover {
              transform: scale(1.12);
            }
          }
        }
      }
      .right {
        height: 100%;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .img-container {
          height: 50%;
          flex: 0 0 50%;
          box-sizing: border-box;
          padding: 2px;
          cursor: pointer;
          .img-animation {
            height: 100%;
            width: 100%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;
              &:hover {
                transform: scale(1.12);
              }
            }
          }
        }
      }
    }
    .show-btn {
      bottom: 10px;
      right: 10px;
      position: absolute;
      width: 90px;
      height: 36px;
      background-color: red;
      line-height: 36px;
      text-align: center;
      background-color: #fff;
      color: #000;
      border-radius: 2px;
      cursor: pointer;
    }
  }
`;

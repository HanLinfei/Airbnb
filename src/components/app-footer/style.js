import styled from "styled-components";

const FooterWrapper = styled.div`
  border-top: 1px solid #eee;
  margin-top: 48px;
  .content {
    width: 1100px;
    margin: 0 auto;
    padding: 30px 0;
    .list-column {
      display: flex;
      justify-content: space-between;
      .title {
        display: block;
        font-weight: 600;
        color: #000;
        margin-bottom: 16px;
      }
      span:not(.title) {
        cursor: pointer;
        margin-top: 6px;
        display: block;
        font-size: 14px;
        color: ${(props) => props.theme.textColor.secondary};
        &:hover {
          text-decoration: underline;
        }
      }

      border-bottom: 1px solid #eee;
      padding-bottom: 30px;
    }
    .desc {
      color: ${(props) => props.theme.textColor.secondary};
      font-size: 14px;
      text-align: center;
      margin-top: 20px;
    }
  }
`;

export default FooterWrapper;

import styled from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg";
const BannerWrapper = styled.div`
  height: 529px;
  /* webpack环境下引入资源文件需要这样引入 这是因为webpack后面会对代码进行打包 此时文件路径就变了 我们这里这样引入webpack会对资源文件进行构建依赖 然后来处理 */
  background: url(${coverImg}) center/cover;
`;

export default BannerWrapper;

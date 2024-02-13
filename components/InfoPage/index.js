import styled from "styled-components";

const InternalInfoPage = styled.section`
  padding: 40px;
  max-width: 750px;
  margin: 0 auto;
  h1,
  h2 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 36px;
  }
  p {
    font-size: 20px;
    line-height: 1.5;
  }
  .inline-image {
    width: 80%;
    margin: 24px auto;
    img {
      width: 100%;
    }
  }
`;
const InfoPage = ({ children }) => {
  return <InternalInfoPage>{children}</InternalInfoPage>;
};

export default InfoPage;

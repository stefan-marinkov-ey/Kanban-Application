import styled from "styled-components";

export const StyleUserInfo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .nameOfBoard {
    width: 20%;
    h3 {
      font-size: large;
    }
  }
  .userData {
    width: 40%;
    display: flex;
    justify-content: space-between;
    p {
      width: 30%;
      margin-left: 50%;
      @media (max-width: 869px) {
        margin-left: 30%;
        font-size: smaller;
      }
      @media (max-width: 600px) {
        margin-left: 0;
        font-size: small;
      }
    }
    img {
      display: block;
      @media (max-width: 600px) {
        margin-left: 0;
        font-size: small;
        width: 40%;
      }
    }
  }
`;

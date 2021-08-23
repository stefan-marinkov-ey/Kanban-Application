const { default: styled } = require("styled-components");

export const StyleCards = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5%;
  .holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 10%;
      height: 2rem;
      background: steelblue;
      color: whitesmoke;
      margin-bottom: auto;
    }
  }
`;

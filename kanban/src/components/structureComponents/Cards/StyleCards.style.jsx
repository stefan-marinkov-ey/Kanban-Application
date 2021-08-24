const { default: styled } = require("styled-components");

export const StyleCards = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5%;
  color: ${(props) => props.theme.textColor};
  .holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    Button {
      width: 10%;
      height: 2rem;
      margin-bottom: auto;
    }
  }
`;

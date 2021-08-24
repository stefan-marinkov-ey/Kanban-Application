import styled from "styled-components";

export const StyleNewList = styled.div`
  width: 80%;
  margin: 2.5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.primaryText};

  .middleDiv {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    .titleAndCancel {
      display: flex;
      justify-content: center;
      align-items: center;
      > h3 {
        @media (max-width: 500px) {
          font-size: medium;
        }
      }
    }
  }
  .addEndClose {
    width: 80%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 30%;

      @media (max-width: 500px) {
        font-size: smaller;
      }
    }
  }
`;

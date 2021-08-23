import styled from "styled-components";

export const StyleDescription = styled.div`
  .descriptionDiv {
    width: 80%;
    margin: 2.5% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: ${(props) => props.theme.background};
    & > .divAbout {
      width: 100%;
      height: 4rem;
      margin-top: 3%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      padding-left: 5%;
      box-shadow: inset 0.5px 0.5px 0.5px 1px lightgray;
      overflow: hidden;
      background: linear-gradient(rgb(253, 253, 254), rgb(213, 218, 233));
    }
    .divBtnHolder {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: none;
      padding: 0;
      background: none;

      > button {
        width: 40%;
        margin: 0;
        background: ${(props) => props.theme.background};
        color: whitesmoke;
      }
    }
  }
`;

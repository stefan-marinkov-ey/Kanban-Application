import styled from "styled-components";

export const ModalDivDescription = styled.div`
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000%;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${(props) => props.theme.color};
  .modalContent {
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 50%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 26%;
    top: 15%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 20rem;
    label {
      margin-right: auto;
    }

    .descriptionDiv {
      width: 100%;
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
      }
      .divBtnHolder {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: none;
        padding: 0;

        > button {
          width: 40%;
          margin: 0;
          background: ${(props) => props.theme.background};
          background: ${(props) => props.theme.background};
        }
      }
    }
  }
`;

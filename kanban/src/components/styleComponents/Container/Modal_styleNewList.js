import styled from "styled-components";

export const ModalDivNewList = styled.div`
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000%;
  background-color: rgba(0, 0, 0, 0.4);
  .modalContent {
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 40%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 30%;
    top: 15%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 8rem;
    color: ${(props) => props.theme.color};
    label {
      margin-right: auto;
    }
    .newListContent {
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .middleDiv {
        width: 100%;
        height: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        padding: 2%;
        > h2 {
          color: ${(props) => props.theme.background};
          @media (max-width: 500px) {
            font-size: medium;
          }
        }
      }
      .addEndClose {
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        Button {
          width: 30%;
          margin: 2%;
          &:hover {
            opacity: 1;
          }
          @media (max-width: 500px) {
            font-size: x-small;
            width: 45%;
          }
        }
      }
    }
  }
`;

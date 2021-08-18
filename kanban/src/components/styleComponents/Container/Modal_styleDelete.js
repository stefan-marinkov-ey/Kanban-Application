import styled from "styled-components";

export const ModalDivDelete = styled.div`
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
    .DeleteContent {
      margin: 0 auto;
      width: 90%;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: ${(props) => props.theme.background};
      @media (max-width: 500px) {
        font-size: smaller;
      }
      > div {
        padding: 3%;
      }
      .buttonHolderDelete {
        width: 100%;
        display: flex;
        justify-content: space-between;
        Button {
          width: 30%;
          margin: 2%;
          @media (max-width: 500px) {
            font-size: xx-small;
          }
        }
      }
    }
  }
`;

import styled from "styled-components";

export const ModalDivEdit = styled.div`
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
    min-height: 12rem;
    color: ${(props) => props.theme.color};
    label {
      margin-right: auto;
      color: ${(props) => props.theme.background};
    }

    .EditContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      color: ${(props) => props.theme.background};
      .editDiv {
        > h2 {
          @media (max-width: 500px) {
            font-size: medium;
          }
        }
        &:nth-child(2) {
          width: 100%;
          margin-top: 5%;
          min-height: 12rem;
        }
        &.holderBtns {
          width: 84%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          Button {
            margin: 0;

            &:first-child {
              width: 40%;
            }
            &:last-child {
              width: 40%;
            }
            @media (max-width: 500px) {
              font-size: xx-small;
            }
          }
        }
      }
    }
  }
`;

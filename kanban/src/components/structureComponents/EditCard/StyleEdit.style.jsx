import styled from "styled-components";

export const StyleEdit = styled.div`
  .EditContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: ${(props) => props.theme.primaryText};
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
`;

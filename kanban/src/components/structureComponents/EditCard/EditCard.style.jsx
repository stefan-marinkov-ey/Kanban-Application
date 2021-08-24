import styled from "styled-components";

export const StyleEdit = styled.div`
  .EditContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: ${(props) => props.theme.primaryText};
    .checkboxes {
      width: 80%;
      margin: 5% auto 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      span {
        &:hover {
          transform: scale(1.2);
          cursor: pointer;
        }
        &:visited {
          border: 4px solid steelblue;
        }
        transition: all 0.3s ease-in;
      }
    }
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

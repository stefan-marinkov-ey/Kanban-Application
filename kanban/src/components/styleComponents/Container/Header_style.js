import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 9rem;
  background: ${(props) => props.theme.background};
  color: whitesmoke;
  > div {
    &.headerButtons {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      margin-top: 1%;

      Button {
        width: 15%;
        height: 1.5rem;
        margin: auto 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        border: none;
        justify-content: flex-end;
        &:last-child {
          margin-right: 5%;
          margin-left: 1%;
        }
        &:hover {
          opacity: 0.8;
        }
        @media (max-width: 500px) {
          width: 25%;
          font-size: smaller;
        }
      }
    }
    &:last-child {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: auto 0;

      h2 {
        display: flex;
        align-items: center;
        margin-left: 5%;
        @media (max-width: 500px) {
          font-size: large;
        }
      }
      > div {
        height: 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &:last-child {
          width: 15%;
          display: flex;
          justify-content: space-between;
          margin-right: 5%;
          @media (max-width: 969px) {
            width: 20%;
          }
          @media (max-width: 769px) {
            width: 30%;
          }
          @media (max-width: 500px) {
            width: 45%;
            font-size: smaller;
          }
        }
      }
    }
  }
`;

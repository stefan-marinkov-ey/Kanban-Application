import styled from "styled-components";

export const ListsDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.background};

  > div {
    &:first-child {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid lavender;
      span {
        font-size: large;
        font-weight: bold;
        margin: auto 0;
      }
      > Button {
        margin: auto 0;
        border: none;
        box-shadow: none;
        height: 1.3rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 15%;
        color: ${(props) => props.theme.background};
        background: none;
        font-weight: bold;
        &:hover {
          background: ${(props) => props.theme.background};
          color: whitesmoke;
          opacity: 1;
        }
      }
    }

    &:nth-child(2) {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 1%;
    }
  }
  > Button {
    width: 25%;
    margin: 4% auto;
    border-radius: 5px;
    border: none;
    &:hover {
      background: whitesmoke;
      color: steelblue;
      opacity: 1;
      border: none;
    }
    @media (max-width: 769px) {
      width: 40%;
    }
    @media (max-width: 500px) {
      width: 52.5%;
    }
  }
`;

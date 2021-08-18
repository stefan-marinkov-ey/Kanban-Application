import styled from "styled-components";

export const ListCardsDiv = styled.div`
  width: 30%;
  height: 300px;
  overflow: auto;
  border-radius: 5px;
  padding: 2%;
  box-shadow: inset 0.5px 0.5px 2px 0.5px gray;
  background: linear-gradient(rgb(253, 253, 254), rgb(213, 218, 233));

  margin: 2% auto;
  @media (max-width: 769px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 60%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
  h4 {
    height: 2rem;
    padding: 2%;
    border-bottom: 3px solid lavender;
    font-weight: bolder;
    width: 90%;
    margin: 0 auto;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color};
      background: ${(props) => props.theme.background};
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }
  }
  .titleChange {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    input {
      width: 80%;
    }
    Button {
      width: 25%;
      height: 1.2rem;
      margin: 0 5%;
    }
  }
  .cardField {
    textarea {
      width: 90%;
      resize: none;
      height: 4rem;
    }

    > div {
      width: 90%;
      margin: 2% auto;
      display: flex;
      justify-content: space-between;
      .newListBtn {
        width: 25%;
      }
      Button {
        &:first-child {
          width: 50%;
          margin-left: 0;
        }
        &:last-child {
          width: 30%;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(175, 57, 43);
  background: linear-gradient(
    45deg,
    rgba(175, 57, 43, 1),
    rgba(2, 0, 36, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  form {
    width: 60%;
    height: calc(100vh - 40%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    input {
      margin-bottom: 5%;
      height: 2.5rem;
      border-radius: 5px;
    }
    span {
      margin-bottom: 5%;
      font-size: smaller;
      color: red;
    }
    Button {
      width: 10rem;
      margin: 0;
      min-height: 2.5rem;
      border-radius: 5px;
      &:hover {
        background: whitesmoke;
        opacity: 1;
        font-weight: bold;
      }
    }
  }
`;

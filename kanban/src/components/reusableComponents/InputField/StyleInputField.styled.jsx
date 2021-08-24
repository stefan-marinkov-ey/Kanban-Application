import styled from "styled-components";

export const StyleInputField = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  color: ${(props) => props.theme.color};
  label {
    margin: 2% 0 1% 0;
  }
  input {
    width: 100%;
    :focus {
      outline-style: none;
    }
  }
`;

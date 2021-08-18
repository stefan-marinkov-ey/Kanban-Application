import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  margin-top: 5%;
  margin-left: 5%;
  width: 60%;
  height: 2rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    opacity: 0.4;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
`;

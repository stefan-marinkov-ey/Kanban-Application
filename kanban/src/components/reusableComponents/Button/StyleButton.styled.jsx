import styled from "styled-components";

export const StyleButton = styled.button`
  height: 2rem;
  border: 2px solid ${(props) => props.theme.primatyText};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};

  &:hover {
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    opacity: 0.4;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.primary};
  }
`;

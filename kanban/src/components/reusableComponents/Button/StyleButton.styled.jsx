import styled from "styled-components";

export const StyleButton = styled.button`
  height: 2rem;
  background: ${(props) => props.background};
  border: 2px solid ${(props) => props.theme.toggleBorder};
  color: ${(props) => props.theme.color};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
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

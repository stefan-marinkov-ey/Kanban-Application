import styled from "styled-components";

export const StyleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 10rem;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
`;

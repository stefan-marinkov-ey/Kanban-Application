import styled from "styled-components";

export const StyleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 10rem;
  background: ${(props) => props.theme.background};
  color: whitesmoke;
`;

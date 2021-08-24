import styled from "styled-components";

export const StyleBoard = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  background: ${(props) =>
    `  linear-gradient(
      ${props.theme.gradientWhite},
    ${props.theme.gradientDark} 70%
    
  )`};
`;

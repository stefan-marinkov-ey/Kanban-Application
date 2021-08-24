import styled from "styled-components";

export const StyleList = styled.div`
  width: 30%;
  height: 300px;
  overflow: auto;
  border-radius: 5px;
  padding: 2%;
  box-shadow: inset 0.5px 0.5px 2px 0.5px gray;
  color: ${(props) => props.theme.textColor};
  background: ${(props) =>
    `  linear-gradient(
      ${props.theme.gradientWhite},
    ${props.theme.gradientDark} 70%
    
  )`};

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
`;

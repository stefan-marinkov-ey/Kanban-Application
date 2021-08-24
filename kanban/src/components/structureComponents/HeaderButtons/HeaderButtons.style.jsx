import styled from "styled-components";

export const StyleHeaderButtons = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 2rem;
  margin: 0 auto;
  Button {
    width: 25%;
    margin-left: 0;
    height: 1rem;

    @media (max-width: 600px) {
      width: 40%;
      height: 1rem;
    }
  }
  @media (max-width: 600px) {
    top: 0;
    height: 1.2rem;
  }
`;

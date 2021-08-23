import styled from "styled-components";

export const StyleListTitle = styled.div`
  width: 90%;
  height: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  border-bottom: 3px solid lavender;
  margin-bottom: 2%;
  h4 {
    font-weight: bolder;
  }
  .titleChange {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    background: lavender;
  }
`;

import styled from "styled-components";

export const StyleLists = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryText};

  .listsContent {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid lavender;
  }
  .allLists {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 2.5%;
  }
`;

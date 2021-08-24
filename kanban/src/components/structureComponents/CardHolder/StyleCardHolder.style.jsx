import styled from "styled-components";

export const StyleCardHolder = styled.div`
  width: 85%;
  color: ${(props) => props.theme.primaryText};
  .cardFunc {
    width: 95%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    font-weight: bolder;
    box-shadow: 0.5px 0.5px 0.5px 0.5px ${(props) => props.theme.primaryText};
    span {
      visibility: hidden;
    }
  }
  .cardDesc {
    width: 95%;
    height: 2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: smaller;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p:hover {
    cursor: pointer;
    opacity: 0.8;
    background: ${(props) => props.theme.backgroundColor};
    transition: all 0.5s ease-in;
    span {
      visibility: visible;
    }
    transition: all 0.5s ease-in;
  }
`;

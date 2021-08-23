import styled from "styled-components";

export const StyleCardHolder = styled.div`
  width: 85%;
  .cardFunc {
    width: 95%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    font-weight: bolder;
    span {
      visibility: hidden;
    }
  }
  .cardDesc {
    width: 95%;
    height: 2rem;
    border-bottom: 3px solid lavender;
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
    span {
      visibility: visible;
    }
    transition: all 0.5s ease-in;
  }
`;

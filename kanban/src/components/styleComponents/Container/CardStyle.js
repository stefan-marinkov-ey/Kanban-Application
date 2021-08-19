const { default: styled } = require("styled-components");

export const CardDivStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      width: 90%;
      height: 6rem;
      margin-bottom: 1%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 2%;
      > p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        background: white;
        height: 2rem;
        box-shadow: inset 0.5px 0.5px 1px 1px gray;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: flex-start;
        color: ${(props) => props.theme.color};
        padding: 2%;
        span {
          opacity: 0;
        }

        &:hover {
          opacity: 0.9;
          cursor: pointer;
          background: ${(props) => props.theme.background};
          color: ${(props) => props.theme.color};
          transition: all 0.5s ease-in-out;
          span {
            opacity: 1;
            margin-left: auto;
            font-size: xx-large;
          }
        }
      }
    }
    Button {
      background: ${(props) => props.theme.background};
      width: 10%;
      height: 2rem;
      border: none;
      margin-top: 2%;
      margin-bottom: auto;
      &:hover {
        opacity: 1;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
      }
      @media (max-width: 500px) {
        font-size: smaller;
      }
    }
  }
`;

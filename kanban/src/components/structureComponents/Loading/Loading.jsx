import React from "react";
import styled from "styled-components";

const LoadingDiv = styled.div`
  width: 300px;
  height: 300px;
  font-weight: bold;
  font-size: 3rem;
  margin: auto;
`;

const Loading = () => {
  return <LoadingDiv>LOADING</LoadingDiv>;
};

export default Loading;

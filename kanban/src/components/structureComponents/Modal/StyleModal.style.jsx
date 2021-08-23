import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;

  .modal {
    z-index: 100;
    background: linear-gradient(rgb(253, 253, 254), rgb(213, 218, 233));
    position: relative;
    margin: 5rem auto;
    border-radius: 3px;
    max-width: 500px;
    min-height: 250px;
    padding: 2rem;
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
  }

  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.3;
    cursor: pointer;
    border: none;
  }
`;

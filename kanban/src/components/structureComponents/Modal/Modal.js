import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
const ModalWrapper = styled.div`
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
    background: gray;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
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

const Modal = ({ isShowing, hide, children }) => {
  return isShowing
    ? createPortal(
        <>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {children}
            </div>
          </ModalWrapper>
        </>,
        document.body
      )
    : null;
};

Modal.propTypes = {
  children: PropTypes.string,
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  children: "",
  isShowing: false,
  hide: () => {},
};
export default Modal;

import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { ModalOverlay, ModalWrapper } from "./StyleModal.style.jsx";

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
  children: PropTypes.element,
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  children: "",
  isShowing: false,
  hide: () => {},
};
export default Modal;

import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { ModalOverlay, ModalWrapper } from "./Modal.style.jsx";
import { useManageContext } from "../../../Context/context.js";

const Modal = ({ isShowing, hide, children }) => {
  const { state } = useManageContext();
  const { errorMessage } = state;
  const errorMessageForDisplay = errorMessage ? <h2>{errorMessage}</h2> : null;
  return isShowing
    ? createPortal(
        <>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal-header">
                {errorMessageForDisplay}
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

import React from "react";
import PropTypes from "prop-types";
import { StyleButton } from "./StyleButton.styled.jsx";

const Button = ({ label, onClick, type, loading, className, onMouseDown }) => {
  return (
    <StyleButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={loading}
      onMouseDown={onMouseDown}
    >
      {label}
    </StyleButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
};

Button.defaultProps = {
  children: "",
  type: "text",
  label: "",
  className: "",
  onMouseDown: () => {},
};

export default Button;

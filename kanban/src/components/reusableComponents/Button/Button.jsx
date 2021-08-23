import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled.jsx";

const Button = ({ label, onClick, type, loading, className, onMouseDown }) => {
  return (
    <StyledButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={loading}
      onMouseDown={onMouseDown}
    >
      {label}
    </StyledButton>
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

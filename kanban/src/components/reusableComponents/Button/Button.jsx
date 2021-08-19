import React from "react";
import PropTypes from "prop-types";
import { StyledPrimaryButton } from "../../styleComponents/Container/Button_styled";

const Button = ({ label, onClick, type, loading, className, onMouseDown }) => {
  return (
    <StyledPrimaryButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={loading}
      onMouseDown={onMouseDown}
    >
      {label}
    </StyledPrimaryButton>
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

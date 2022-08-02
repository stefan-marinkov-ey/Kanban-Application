import React from "react";
import PropTypes from "prop-types";
import { StyledPrimaryButton } from "../../styleComponents/Container/Button_styled";

const Button = ({ label, onClick, type, loading, className }) => {
  return (
    <StyledPrimaryButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={loading}
    >
      {label}.
    </StyledPrimaryButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: "",
  type: "text",
  label: "",
  className: "",
};

export default Button;

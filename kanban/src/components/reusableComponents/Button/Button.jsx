import React from "react";
import PropTypes from "prop-types";
import { StyledPrimaryButton } from "../../styleComponents/Container/Button_styled";

const Button = ({ label, onClick, type, loading }) => {
  return (
    <StyledPrimaryButton type={type} onClick={onClick} disabled={loading}>
      {label}
    </StyledPrimaryButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Button.defaultProps = {
  children: "",
  type: "text",
  label: "",
};

export default Button;

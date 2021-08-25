import React from "react";
import PropTypes from "prop-types";
import { StyleInputField } from "./StyleInputField.styled";

const InputField = ({
  value,
  label,
  placeholder,
  validation,
  type,
  onChange,
  name,
  onBlur,
}) => {
  return (
    <StyleInputField>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
      />
    </StyleInputField>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  validation: PropTypes.array,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

InputField.defaultProps = {
  name: "",
  value: "",
  label: "",
  placeholder: "",
  type: "text",
  validation: [],
  onChange: () => {},
  onBlur: () => {},
};

export default InputField;

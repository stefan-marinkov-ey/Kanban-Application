import React from "react";
import PropTypes from "prop-types";
import { InputStyleDiv } from "../../styleComponents/Container/Input_styled";

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
    <InputStyleDiv>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
      />
    </InputStyleDiv>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  validation: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

InputField.defaultProps = {
  name: "",
  value: "",
  label: "",
  placeholder: "",
  type: "text",
  validation: [],
  onBlur: () => {},
};

export default InputField;

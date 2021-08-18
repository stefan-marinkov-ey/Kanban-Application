import React, { useState } from "react";
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
}) => {
  const [error, setError] = useState(false);

  return (
    <InputStyleDiv>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
      {error && <span></span>}
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
};

InputField.defaultProps = {
  name: "",
  value: "",
  label: "",
  placeholder: "",
  type: "text",
  validation: [],
};

export default InputField;

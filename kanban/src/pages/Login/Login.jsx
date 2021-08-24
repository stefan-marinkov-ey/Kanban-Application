import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/reusableComponents/Button";
import InputField from "../../components/reusableComponents/InputField/InputField";
import { loginUser } from "../../Context";
import { getUrl } from "../../utility/constantsKeysAndUrl";
import {
  loginBtn,
  loginNameOrEmail,
  loginPassword,
  welcomeGuest,
} from "../../utility/constantsText";
import { numberValidate, validateNameOrEmail } from "../../utility/validation";
import { boardRoute } from "../../utility/constantsWithRoutesAndMethods";
import { useManageContext } from "../../Context/context";
import { getBoardData, refreshEffect } from "../../Context/actions";
import { StyleLoginPage } from "./StyleLogin.style.jsx";
const Login = (props) => {
  const { state, dispatch } = useManageContext();
  const { loading, errorMessage, refresh } = state;

  const [emailOrName, setEmailOrName] = useState("");
  const [password, setPassword] = useState("");

  const [validRaturnEmailOrName, setValidRaturnEmailOrName] = useState("");
  const [validRaturnPassword, setValidRaturnPassword] = useState("");

  const validateName = <span>{validRaturnEmailOrName}</span>;
  const validatePassword = <span>{validRaturnPassword}</span>;
  const disabledBtn =
    validRaturnEmailOrName || validRaturnPassword ? !loading : loading;

  const handleLogin = async () => {
    try {
      let response = await loginUser(dispatch, getUrl);
      if (!response === undefined) return;
      refreshEffect(dispatch, !refresh);
      props.history.push(`${boardRoute}`);
    } catch (error) {
      getBoardData(dispatch, "Something goes wrong");
    }
  };

  const handleChangeName = (e) => {
    e.preventDefault();
    setEmailOrName(e.target.value);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const validationFunc = useCallback(() => {
    setValidRaturnEmailOrName(validateNameOrEmail(emailOrName));
    setValidRaturnPassword(numberValidate(password));
  }, [emailOrName, password]);

  useEffect(() => {
    validationFunc();
  }, [validationFunc]);

  return (
    <StyleLoginPage>
      {errorMessage}
      <form>
        <h1>{welcomeGuest}</h1>
        <InputField
          label={loginNameOrEmail}
          onChange={handleChangeName}
          value={emailOrName}
          type="text"
        />
        {validateName}
        <InputField
          label={loginPassword}
          onChange={handleChangePassword}
          value={password}
          type="password"
        />
        {validatePassword}
        <Button
          label={loginBtn}
          type="submit"
          onClick={handleLogin}
          loading={disabledBtn}
        ></Button>
      </form>
    </StyleLoginPage>
  );
};

export default Login;

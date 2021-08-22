import React, { useState } from "react";
import Button from "../../components/reusableComponents/Button";
import InputField from "../../components/reusableComponents/Input/InputField";
import { loginUser } from "../../Context";
import { getUrl } from "../../utility/constantsKeysAndUrl";
import { LoginPage } from "../../components/styleComponents/Container/Login_styled";
import {
  loginBtn,
  loginNameOrEmail,
  loginPassword,
  welcomeGuest,
} from "../../utility/constantsText";
import { numberValidate, validateNameOrEmail } from "../../utility/validation";
import { boardRoute } from "../../utility/constantsWithRoutesAndMethods";
import { useManageContext } from "../../Context/context";
import { getBoardData } from "../../Context/actions";
const Login = (props) => {
  const { state, dispatch } = useManageContext();

  const { loading, errorMessage } = state;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      let response = await loginUser(dispatch, getUrl);
      if (!response === undefined) return;
      props.history.push(`${boardRoute}`);
    } catch (error) {
      getBoardData(dispatch, "Something goes wrong");
    }
  };

  const handleChangeName = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <LoginPage>
      {errorMessage}
      <form>
        <h1>{welcomeGuest}</h1>
        <InputField
          label={loginNameOrEmail}
          onChange={handleChangeName}
          value={email}
          type="text"
        />
        {validateNameOrEmail(email)}
        <InputField
          label={loginPassword}
          onChange={handleChangePassword}
          value={password}
          type="password"
        />
        {numberValidate(password)}
        <Button
          label={loginBtn}
          type="submit"
          onClick={handleLogin}
          loading={loading}
        ></Button>
      </form>
    </LoginPage>
  );
};

export default Login;

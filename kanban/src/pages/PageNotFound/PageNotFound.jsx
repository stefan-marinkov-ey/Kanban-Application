import React from "react";
import Button from "../../components/reusableComponents/Button";
import { logoutAction, useManageContext } from "../../Context";
import { backToLogin, notFound } from "../../utility/constantsText";
import { loginRoute } from "../../utility/constantsWithRoutesAndMethods";
import { StyleNotFound } from "./PageNotFound.style.jsx";

const PageNotFound = (props) => {
  const { dispatch } = useManageContext();
  const handleBack = () => {
    logoutAction(dispatch);
    props.history.push(`${loginRoute}`);
  };
  return (
    <StyleNotFound>
      <h1>{notFound}</h1>
      <Button label={backToLogin} onClick={handleBack} />
    </StyleNotFound>
  );
};

export default PageNotFound;

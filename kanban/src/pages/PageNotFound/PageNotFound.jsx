import React from "react";
import Button from "../../components/reusableComponents/Button";
import { NotFoundDiv } from "../../components/styleComponents/Container/Not_Found";
import { logoutAction, useManageContext } from "../../Context";
import { backToLogin, notFound } from "../../utility/constantsText";
import { loginRoute } from "../../utility/constantsWithRoutesAndMethods";

const PageNotFound = (props) => {
  const { dispatch } = useManageContext();
  const handleBack = () => {
    logoutAction(dispatch);
    props.history.push(`${loginRoute}`);
  };
  return (
    <NotFoundDiv>
      <h1>{notFound}</h1>
      <Button label={backToLogin} onClick={handleBack} />
    </NotFoundDiv>
  );
};

export default PageNotFound;

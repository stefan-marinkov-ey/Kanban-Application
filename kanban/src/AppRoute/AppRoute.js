import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useManageContext } from "../Context";

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
  const { state } = useManageContext();
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (state.token) {
          return <Component {...props} />;
        } else {
          return <Redirect exact to={{ pathname: "/login" }} />;
        }
      }}
    />
  );
};

export default AppRoutes;

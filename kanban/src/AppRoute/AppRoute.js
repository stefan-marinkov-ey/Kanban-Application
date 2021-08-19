import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "../Context";

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
  const userDetails = useAuthState();
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (userDetails.token) {
          return <Component {...props} />;
        } else {
          return <Redirect exact to={{ pathname: "/login" }} />;
        }
      }}
    />
  );
};

export default AppRoutes;

import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./utility/routes";
import AppRoute from "./AppRoute/AppRoute";
import Login from "./pages/Login/Login";
import { StyledApp } from "./components/styleComponents/Container/App_style";
import ManageContext from "./Context/context";
const getRouteMap = () => {
  return routes.map((route) => (
    <AppRoute
      key={route.path}
      path={route.path}
      component={route.component}
      isPrivate={route.isPrivate}
    />
  ));
};

function App() {
  return (
    <ManageContext>
      <StyledApp>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            {getRouteMap()}
          </Switch>
        </Router>
      </StyledApp>
    </ManageContext>
  );
}

export default App;

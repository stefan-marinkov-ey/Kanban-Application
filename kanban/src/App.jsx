import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./utility/routes";
import AppRoute from "./AppRoute/AppRoute";
import Login from "./pages/Login/Login";
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
      <div>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            {getRouteMap()}
          </Switch>
        </Router>
      </div>
    </ManageContext>
  );
}

export default App;

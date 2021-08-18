import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";
import { AuthProvider } from "./Context";
import routes from "./utility/routes";
import AppRoute from "./AppRoute/AppRoute";

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
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>{getRouteMap()}</Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./utility/routes";
import AppRoute from "./AppRoute/AppRoute";
import Login from "./pages/Login/Login";
import ManageContext from "./Context/context";
import styled from "styled-components";
import { Content } from "./components/structureComponents/ScrollButton/StyleScrollButton.style";
import ScrollButton from "./components/structureComponents/ScrollButton";

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

const StyleApp = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

function App() {
  return (
    <ManageContext>
      <StyleApp>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            {getRouteMap()}
          </Switch>
        </Router>
        <Content />
        <ScrollButton />
      </StyleApp>
    </ManageContext>
  );
}

export default App;

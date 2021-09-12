import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppContainer from "../components/core/App";
import Login from "../components/login/login";

import { PrivateRoute } from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

export default function App() {
  return (
    <Switch>
      <PrivateRoute path="/devices" component={AppContainer} />
      <UnauthenticatedApp
        path="/login"
        component={(props: any) => <Login {...props} />}
      />
      <Route render={() => <Redirect to="/devices" />} />
    </Switch>
  );
}

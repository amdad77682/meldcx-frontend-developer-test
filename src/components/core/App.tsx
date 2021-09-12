import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Devices from "../devices/Devices";

export default function AppContainer() {
  return (
    <Switch>
      <Route key="devices" path="/devices" component={Devices} />
    </Switch>
  );
}

import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { userInLoggedIn } from "../utils/authentication";

export default function UnauthenticatedApp({ path, component }: any) {
  return userInLoggedIn() ? (
    <Redirect to={{ pathname: "/devices" }} />
  ) : (
    <Switch>
      <Route path={path} render={component} />
      <Route render={() => <div>page not found</div>} />
    </Switch>
  );
}

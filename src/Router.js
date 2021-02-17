import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route
        exact
        path="/"
        render={() => (
            <main>
              <Menu />
              <Header />
              <Homepage />
            </main>
          )}
        />
        <Route
        path="/login"
        render={() => (
            <Login />
          )}
        />
        <Route
        path="/profile"
        render={() => (
            <Profile />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

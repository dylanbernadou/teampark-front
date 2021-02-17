import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Parameters from "./components/Parameters/Parameters";
import Messaging from "./components/Messaging/Messaging";
import Drive from "./components/Drive/Drive";

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route
        exact
        path="/homepage"
        render={() => (
            <main>
              <Menu />
              <Header current_page="Mon mur" />
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
            <main>
              <Menu />
              <Header current_page="Mon profil"/>
              <Profile />
            </main>
          )}
        />
        <Route
        path="/parameters"
        render={() => (
            <main>
              <Menu />
              <Header current_page="Mes paramètres"/>
              <Parameters />
            </main>
          )}
        />
        <Route
        path="/messaging"
        render={() => (
            <main>
              <Menu />
              <Header current_page="Ma messagerie"/>
              <Messaging />
            </main>
          )}
        />
        <Route
        path="/drive"
        render={() => (
            <main>
              <Menu />
              <Header current_page="Mon drive"/>
              <Drive />
            </main>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

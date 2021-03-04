import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Helper from "./Helper";
import DAO from "./DAO";

import Wall from "./components/Wall/Wall";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Parameters from "./components/Parameters/Parameters";
import Messaging from "./components/Messaging/Messaging";
import Drive from "./components/Drive/Drive";

import SchoolDashboard from "./components/SchoolDashboard/SchoolDashboard";
import SchoolStudents from "./components/SchoolStudents/SchoolStudents";
import SchoolPromotions from "./components/SchoolPromotions/SchoolPromotions";

function Router() {
  const [user, set_user] = useState(null);
  const [loaded, set_loaded] = useState(false);

  const api = new DAO();
  const help = new Helper();
  const auth_token = help.get_cookie("auth_token");

  useEffect(() => {
    if (auth_token) get_user();
    !localStorage.user_id || (window.location.href = "/logout");
  }, []);

  const get_user = () => {
    api.get_auth().then((data) => {
      set_user(data);
      set_loaded(true);
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            auth_token ? (
            <Redirect to="/wall" />
          ) : (
            (window.location.href = "/login")
          )}
        />
        <Route
          path="/login"
          render={() => (
              <Login />
            )}
        />
        <Route
          exact
          path="/logout"
          render={() => {
            help.delete_all_cookies();
          }}
        />
        {loaded && (
          <Switch>
            {user.roles.includes("STUDENT") ||
              (window.location.href = "/login")}
              <Route
                exact
                path="/wall"
                render={() => (
                    <main>
                      <Menu />
                      <Header user={user} current_page="Mon mur" />
                      <Wall user={user} />
                    </main>
                  )}
                />
                <Route
                path="/profile"
                render={() => (
                    <main>
                      <Menu />
                      <Header user={user} current_page="Mon profil"/>
                      <Profile user={user}/>
                    </main>
                  )}
                />
                <Route
                path="/parameters"
                render={() => (
                    <main>
                      <Menu />
                      <Header user={user} current_page="Mes paramètres"/>
                      <Parameters />
                    </main>
                  )}
                />
                <Route
                path="/messaging"
                render={() => (
                    <main>
                      <Menu />
                      <Header user={user} current_page="Ma messagerie"/>
                      <Messaging user={user} />
                    </main>
                  )}
                />
                <Route
                path="/drive"
                render={() => (
                    <main>
                      <Menu />
                      <Header user={user} current_page="Mon drive"/>
                      <Drive />
                    </main>
                  )}
                />
                <Route
                path="/dashboard"
                render={() => (
                    <main>
                      <Menu />
                      <Header user={user} current_page="Tableau de bord"/>
                      <SchoolDashboard />
                    </main>
                  )}
                />
                <Route
                path="/promotions"
                render={() => (
                    <main>
                      <Menu />
                      <Header user={user} current_page="Liste des promotions"/>
                      <SchoolPromotions />
                    </main>
                  )}
                />
                <Route
                path="/students"
                render={() => (
                    <main>
                      <Menu />
                      <Header user={user} current_page="Liste des étudiants"/>
                      <SchoolStudents />
                    </main>
                  )}
                />
          </Switch>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { SignIn, SignUp, ProfilePage } from "./components";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setOnline,
  setName,
  setSurname,
  setUser,
} from "./redux/actions/app";
import "./scss/base.scss";

function App() {
  const dispatch = useDispatch();
  const { email, password, hasAccount, name, surname, user } = useSelector(
    ({ app }) => {
      return {
        email: app.email,
        password: app.password,
        hasAccount: app.hasAccount,
        name: app.name,
        surname: app.surname,
        user: app.user,
      };
    }
  );

  const onEmail = (data) => {
    dispatch(setEmail(data));
  };
  const onPassword = (data) => {
    dispatch(setPassword(data));
  };
  const onLine = (bool) => {
    dispatch(setOnline(bool));
  };
  const onName = (name) => {
    dispatch(setName(name));
  };
  const onSurname = (surname) => {
    dispatch(setSurname(surname));
  };
  const onUser = (users) => {
    dispatch(setUser(users));
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        onUser(user);
      } else {
        onUser("");
      }
    });
  };

  React.useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <ProfilePage />
      ) : (
        <main className="wrap">
          <Route exact path="/">
            <SignIn
              onEmail={onEmail}
              onPassword={onPassword}
              email={email}
              password={password}
              onLine={onLine}
            />
          </Route>
          <Route path="/registration">
            <SignUp
              onEmail={onEmail}
              onPassword={onPassword}
              email={email}
              password={password}
              onName={onName}
              onSurname={onSurname}
              onLine={onLine}
              name={name}
              surname={surname}
            />
          </Route>
        </main>
      )}
    </div>
  );
}

export default App;

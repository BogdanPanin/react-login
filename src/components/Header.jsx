import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "../scss/header.scss";
import "../scss/mediaHeader.scss";

function Header({ name }) {
  const handleLogOut = () => {
    firebase.auth().signOut();
  };
  return (
    <div className="header">
      <p className="header__welcome">Привет {name}</p>
      <button className="header__out" onClick={handleLogOut}>
        Выйти
      </button>
    </div>
  );
}

export default Header;

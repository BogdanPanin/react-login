import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Header from "./Header";

function ProfilePage() {
  const user = firebase.auth().currentUser;
  const name = user.displayName;
  return (
    <div>
      <Header name={name} />
    </div>
  );
}

export default ProfilePage;

import React from "react";
import "./HomePage.css";
import firebase from "../firebase.js";
const Header = () => {
  return (
    <div>
      <div className="navbar">
        <h1 className="heading">Game Center</h1>

        <button className="hbtn" onClick={() => firebase.auth().signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Header;

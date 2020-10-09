import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "../firebase.js";

const Signup = ({ history }) => {
  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, firstName, lastName } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
        const db = firebase.firestore();
        db.collection("user_details").add({
          uid: firebase.auth().currentUser.uid,
          email: email.value,
          firstname: firstName.value,
          lastname: lastName.value,
        });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <h1>SIGNUP</h1>
      <form onSubmit={handleSignup}>
        <label>
          FirstName
          <input name="firstName" type="firstName" placeholder="FirstName" />
        </label>
        <label>
          LastName
          <input name="lastName" type="lastName" placeholder="LastName" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">SIGNUP</button>
      </form>
    </div>
  );
};
export default withRouter(Signup);

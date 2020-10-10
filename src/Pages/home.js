import React, { useState, useEffect, useContext } from "react";
import Header from "../Components/header";
import firebase from "../firebase.js";

const Home = () => {

  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const userData = await db.collection("user_details").get();
      setUser(userData.docs.map((doc) => doc.data()));
      setUserId(userData.docs.map((doc) => doc.id));
    };
    fetchData();
  }, []);
  const userDetails = {
    email: user.map((u) => u.email),
    username: user.map((u) => u.username),
    uid: user.map((u) => u.uid),
  };
  const currentUser = firebase.auth().currentUser;
  let userIndex = null;
  for (let i = 0; i < user.length; i++) {
    if (userDetails.uid[i] === currentUser.uid) {
      userIndex = i;
    }
  }
  console.log(userDetails.username[userIndex]);
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    </div>
  );
};
export default Home;

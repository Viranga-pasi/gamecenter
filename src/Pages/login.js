import React, { useCallback, useContext } from "react";
import firebase from "../firebase.js";
import { AuthContext } from "../auth.js";
import { Link } from "react-router-dom";
import { ReactComponent as Login_img } from './Images/login_img.svg';
import { ReactComponent as Register } from './Images/register.svg';
import { Redirect, withRouter } from "react-router";
import "./style.css";
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, username } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
        const db = firebase.firestore();
        db.collection("user_details").add({
          uid: firebase.auth().currentUser.uid,
          email: email.value,
          username: username.value,
        });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

// script for design

window.onload=function(){
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener('click', ()=>{
    container.classList.add("sign-up-mode"); 
  });
  
  sign_in_btn.addEventListener('click', ()=>{
    container.classList.remove("sign-up-mode"); 
  });
}








  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">

            <form onSubmit={handleLogin} className="sign-in-form"> 
              <h2 className="title">SIGN IN</h2>
              
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input name="email" type="email" placeholder="Email" />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input name="password" type="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn solid">LOGIN</button>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                
                <a href="#" className="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                
              </div>
            </form>




            <form onSubmit={handleSignup} className="sign-up-form"> 
              <h2 className="title">SIGN UP</h2>
              
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input name="username" type="text" placeholder="Username" />
              </div>

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input name="email" type="email" placeholder="Email" />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input name="password" type="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn solid">SIGNUP</button>
             
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                
                <a href="#" className="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                
              </div>
            </form>  



          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New Here?</h3>
              <p>Register with game center today and enjoy life of coding..!!</p>
              <button className="btn transparent" id="sign-up-btn">Sign up</button>
            </div>
 
            <Login_img className="image"/>
          
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of Us</h3>
              <p>Sign up to access more</p>
              <button className="btn transparent" id="sign-in-btn">Sign in</button>
            </div>
 
          <Register className="image"/>
          </div>



        </div>
              
      </div>
      </div>
  );
};
export default Login;

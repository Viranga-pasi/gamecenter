import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import { AuthProvider } from "./auth.js";
import PrivateRoute from "./PrivateRoute.js";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

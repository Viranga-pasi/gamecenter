import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/login";

import { AuthProvider } from "./auth.js";
import PrivateRoute from "./PrivateRoute.js";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

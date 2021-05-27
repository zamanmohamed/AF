import React from "react";
import "../bootstrap.min.css";
import { Route } from "react-router-dom";
import Nav from "./component/navbar";
import Login from "./component/login";
import Register from "./component/register";
import Home from "./component/home/home";
import Approve from "./component/approve/approve";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <br></br>
      <br></br>
      <br></br>
      <Route path="/Login" exact>
        <Login />
      </Route>
      <Route path="/Approve" exact>
        <Approve />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
    </React.Fragment>
  );
};

export default App;

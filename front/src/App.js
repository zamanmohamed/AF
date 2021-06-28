import React from "react";
//import "../bootstrap.min.css";
import { Route } from "react-router-dom";
import Nav from "./component/navbar";
import AdminLogin from "./component/login";
import Register from "./component/register";
import Home from "./component/home/home";
import Approve from "./component/approve/approve";
import LoginButton from "./LoginButton";
import SingleConference from "./component/home/singleConference";
import Caption from "./component/caption/caption";
import Profile from "./component/proflie/profile";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <br></br>
      <br></br>
      <br></br>

      <Route path="/Login" exact>
        <LoginButton />
      </Route>
      <Route path="/conference/:id" exact>
        <SingleConference />
      </Route>

      <Route path="/Admin/Login" exact>
        <AdminLogin />
      </Route>
      <Route path="/Approve" exact>
        <Approve />
      </Route>
      <Route path="/" exact>
        <Caption />
        <Home />
      </Route>
      <Route path="/Admin/Register" exact>
        <Register />
      </Route>
      <Route path="/Admin/Proflie" exact>
        <Profile />
      </Route>
    </React.Fragment>
  );
};

export default App;

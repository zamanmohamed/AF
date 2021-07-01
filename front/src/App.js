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


// Reviewer
// import RevLanding from "./component/reviewer/login/RevLanding";
// import RevLogin from "./component/reviewer/login/RevLogin.jsx";
// import RevRegister from "./component/reviewer/login/RevRegister";

//Reviewer Home
import RevHome from "./component/reviewer/home/RevHome";
import RevStartUp from "./component/reviewer/home/RevHomeImg";

//reviewer Research paper
import RevNewResearch from "./component/reviewer/research/RevNewResearch";
import RevOldResearch from "./component/reviewer/research/RevOldResearch";
import RevApproveResearch from "./component/reviewer/research/RevApproveResearch.jsx";
import RevResearchPaper from "./component/reviewer/research/RevResearchPaper";

//reviewer workshop proposal

import RevNewWorkshop from "./component/reviewer/workshop/RevNewWorkshops";
import RevOldWorkshop from "./component/reviewer/workshop/RevOldWorkshops";
import RevApproveWorkshop from "./component/reviewer/workshop/RevApproveWorkshop.jsx";
import RevWorkshopProposal from "./component/reviewer/workshop/RevWorkshopProposal";




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

      {/* Reviewer */}
      
      {/* 

      //Reviewer Login
      
      <Route path="/" exact>
        <RevLanding />
      </Route>
      <Route path="/rev/login" exact>
        <RevLogin />
      </Route>
      <Route path="/rev/register" exact>
        <RevRegister />
      </Route>  
      <Route path="/rev/RevStartUp" exact>
        <RevStartUp />
      </Route>  
      
      //Reviewer Home 

      <Route path="rev/researchpaper/last/:id" exact>
        <RevHome />
      </Route>

      //Reviewer Research paper

      <Route path="/rev/research/underreview" exact>
        <RevNewResearch />
      </Route>
      <Route path=""/rev/research/reviewed" exact>
        <RevOldResearch />
      </Route>
      <Route path="/rev/researchpaper/update/:id" exact>
        <RevApproveResearch />
      </Route>
      <Route path="/rev/researchpaper/:id" exact>
        <RevResearchPaper />
      </Route>

        //reviewer Workshop proposal
      <Route path="/rev/workshop/underreview" exact>
        <RevNewWorkshop />
      </Route>
      <Route path=""/rev/workshop/reviewed" exact>
        <RevOldWorkshop />
      </Route>
      <Route path="/rev/workshopproposal/update/:id" exact>
        <RevApproveWorkshop />
      </Route>
      <Route path="/rev/workshopproposal/:id" exact>
        <RevWorkshopProposal />
      </Route>

      */}

    </React.Fragment>
  );
};

export default App;

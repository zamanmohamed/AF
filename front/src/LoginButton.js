import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <React.Fragment>
      <br></br> <br></br> <br></br>
      <div className="Container d-flex justify-content-center row-hl">
        <h1>Select User Type</h1>
      </div>
      <div className="Container">
        <Link to="/Admin/Login">
          <button class="btn btn-dark btn-block" type="button">
            Admin
          </button>
        </Link>
        <br />
        <button class="btn btn-dark btn-block" type="button">
          User
        </button>
        <br />
        <button class="btn btn-dark btn-block" type="button">
          Reviewer
        </button>
        <br />
        <button class="btn btn-dark btn-block" type="button">
          Editor
        </button>
      </div>
    </React.Fragment>
  );
};

export default LoginButton;

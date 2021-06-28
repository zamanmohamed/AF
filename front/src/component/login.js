import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    Login();
  }

  async function Login() {
    const response = await fetch("http://localhost:5000/api/admins/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    if (response.ok) {
      history.push("/");
    } else {
      alert("Error");
    }
  }

  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-center row-hl">
        <div className="col-lg-6 ">
          <div className="card bg-dark text-light card-form">
            <div class="card-body">
              <div class="text-center ">
                <h3>Login</h3>
                <p>Please fill out this form to login</p>
              </div>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label for="Email">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Email"
                    placeholder="Enter name"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    id="name"
                    placeholder="Enter password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <button className="form-control primary" type="submit">
                    Login
                  </button>
                </div>
                <div className="form-group">
                  <Link to="Register">
                    <button className="form-control " type="button">
                      Register
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default login;

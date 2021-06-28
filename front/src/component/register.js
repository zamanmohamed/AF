import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    addUser();
  }

  async function addUser() {
    const response = await fetch("http://localhost:5000/api/admins/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    if (response.ok) {
      history.push("/");
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
            <div className="card-body">
              <div className="text-center ">
                <h3>Register Page</h3>
                <p>Please fill out this form to reagister</p>
              </div>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label for="name">User Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    ref={nameRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="name">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    id="emaai"
                    placeholder="Enter name"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="name">Password</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Enter password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <button className="form-control " type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default register;

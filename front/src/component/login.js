import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <div class="d-flex justify-content-center row-hl">
        <div class="col-lg-6 ">
          <div class="card bg-dark text-light card-form">
            <div class="card-body">
              <div class="text-center ">
                <h3>Login</h3>
                <p>Please fill out this form to login</p>
              </div>
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    class="form-control"
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="name">Password</label>
                  <input
                    class="form-control"
                    type="text"
                    id="name"
                    placeholder="Enter password"
                    required
                  />
                  <div class="form-group">
                    <label for="type">User Type</label>
                    <select class="form-control" id="type" required>
                      <option></option>
                      <option>User</option>
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Reviewer</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <button class="form-control btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
                <div class="form-group">
                  <Link to="Register">
                    <button class="form-control btn btn-primary" type="button">
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

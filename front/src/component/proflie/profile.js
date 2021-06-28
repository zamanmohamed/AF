import React from "react";

const profile = () => {
  return (
    <React.Fragment>
      <header id="main-header" class="py-2 bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>
                <i class="fas fa-user"></i> Admin Profile
              </h1>
            </div>
          </div>
        </div>
      </header>
      <br></br>
      <section id="profile">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="card">
                <div class="card-header">
                  <h4>Profile</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value="Brad Traversy"
                        readOnly
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        value="test@test.com"
                        readOnly
                      />
                    </div>
                    <div class="form-group">
                      <label for="bio">Bio</label>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid unde at fugiat explicabo temporibus, tempora
                        animi sunt iusto quod beatae optio veritatis velit natus
                        odit error! Possimus esse quisquam quibusdam eveniet
                        autem! Minus dolore quisquam nemo similique doloribus
                        perspiciatis tempore.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <h3>Your Avatar</h3>
              <img
                src={require("url:./img/avatar.png")}
                alt=""
                class="d-block img-fluid mb-3"
              />
              <button class="btn btn-primary btn-block">Edit Image</button>
              <button class="btn btn-danger btn-block">Delete Image</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default profile;

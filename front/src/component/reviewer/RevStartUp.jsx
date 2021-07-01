import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class RevStartUp extends Component {
  render() {
    return (
      <div 
      
      style={{ 
        backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
        height : "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}

        >
          <div className="container text-white">
            <div className="row">
              <div className="col-6">
                <br/><br/><br/><br/>
                <h1>Welcome "Reviewer Name"</h1>
                <br/><br/>
                <h3>Place reviewer responsibility</h3>
                <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                      veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                      molestiae iste.
                </h4>
                <br/><br/>
                <button type="button" class="btn btn-outline-primary">
                    <Link class="nav-link" to="rev/researchpaper/last/:id">Get Start</Link>  
                    </button>   
              </div>
              
            </div>
          </div>

      </div>
    )
  }
}

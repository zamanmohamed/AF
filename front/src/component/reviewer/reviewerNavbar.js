import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Reviewer navigation bar

const reviewerNavbar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3 fixed-top">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    Reviewer Dashboard
                </Link>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to="/researchpaper/last/:id">
                            Reviewer Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/research/underreview">
                            New Research Papers
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/research/reviewed">
                            Reviewed Research Papers
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/workshop/underreview">
                                New Workshop Proposals
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/workshop/reviewed">
                            Reviewed Workshop Proposals
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/researchProfile">
                            Profile
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/logout">
                            Logout
                        </Link>
                    </li>
               </ul>
            </div>
        </nav>
        
    );
};

export default reviewerNavbar;

import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Reviewer navigation bar

export default class RevNavbar extends Component {
    render(){
        return (
            <div>
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
                                    Old Research Papers
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/workshop/underreview">
                                        New Workshop Proposals
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/workshop/reviewed">
                                    Old Workshop Proposals
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
            </div>
        )
    }
}



export default RevNavbar;

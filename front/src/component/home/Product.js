import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
//import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Container>
      <div class="card bg-danger text-white mb-3">
        <Link to={`/conference/${product._id}`}>
          <h1>
            {" "}
            <div class="card-header">{product.title}</div>
          </h1>
        </Link>
        <div class="card-body">
          <h4 class="card-title">{product.date}</h4>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Product;

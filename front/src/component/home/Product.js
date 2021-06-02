import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
//import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Container>
      <div className="card bg-danger text-white mb-3">
        <Link to={`/conference/${product._id}`}>
          <h1>
            {" "}
            <div className="card-header">{product.title}</div>
          </h1>
        </Link>
        <div className="card-body">
          <h4 className="card-title">{product.date}</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Product;

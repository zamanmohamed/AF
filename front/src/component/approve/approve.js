import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";

const approve = () => {
  const [cofarance, setcofarance] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get("http://localhost:5000/api/conferences");
      setcofarance(data);
      console.log(cofarance);
    };
    sendRequest();
  }, []);

  console.log(cofarance);

  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <h1 class="text-center"> conference</h1>
      <br></br>
      <Container>
        <table class="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>speaker</th>
              <th>date</th>
            </tr>
          </thead>

          {cofarance.map((cofaranc) => (
            <Product product={cofaranc} />
          ))}
        </table>
      </Container>
    </React.Fragment>
  );
};

export default approve;

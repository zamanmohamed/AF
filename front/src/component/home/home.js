import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";

const Home = () => {
  const [cofarance, setcofarance] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/conferences/approved"
      );
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
      <Row>
        {cofarance.map((cofaranc) => (
          <Col key={cofaranc._id} sm={6} md={3} lg={3} xl={3}>
            <Product product={cofaranc} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Home;

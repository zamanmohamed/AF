import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const singleConference = ({ match }) => {
  const [conference, setconference] = useState({});
  const id = useParams().id;

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/conferences/${id}`
      );
      setconference(data);
      console.log(data);
    };
    sendRequest();
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>{conference.title}</h1>
    </div>
  );
};

export default singleConference;

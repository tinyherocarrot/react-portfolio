import React from "react";
import { PageContainer } from "../components/Containers";
import { Link } from "react-router-dom";

const WebDevView = () => (
  <PageContainer>
    <Link to="/detail"> Upworld LMS </Link>
    <Link to="/detail"> Chews </Link>
    <Link to="/detail"> Qlink </Link>
    <Link to="/detail"> MERN NYT Search </Link>
  </PageContainer>
);

export default WebDevView;

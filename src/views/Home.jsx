import React from "react";
import { PageContainer } from "../components/Containers";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../components/Carousel";

const HomeView = () => (
  <PageContainer>
    <h1>Hi, I'm Andrew & I'm a developer.</h1>
    <h3>
      Everyday is a new Mab Lib, and everyday I'm filling in the blanks with new
      ideas that challenge me and how I think. I'm passionate about
      sustainability, accessible education, and ethical design.
    </h3>
    <h3>
      What excites me is getting to use my skillset to support these movements.
    </h3>
    <h3>
      Check out my{" "}
      <Link className="text-link" to="/detail">
        work
      </Link>!
    </h3>
    <Carousel />
  </PageContainer>
);

export default HomeView;

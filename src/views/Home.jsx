import React from "react";
import { PageContainer } from "../components/Containers";
import { StyledLink } from "../components/Link";

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
      Check out my <StyledLink to="/detail">work</StyledLink>!
    </h3>
  </PageContainer>
);

export default HomeView;

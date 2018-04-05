import React from "react";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  padding: 7em 5em;
  height: calc(100vh - 14em);
`;

export const PageContainer = props => (
  <StyledPageContainer>{props.children}</StyledPageContainer>
);

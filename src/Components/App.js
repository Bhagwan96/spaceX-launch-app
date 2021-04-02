import React from "react";
import { PageTitle } from "./PageTitle";
import { Content } from "./Content/Content";
import { Footer } from "./Footer";
import styled from "styled-components";
const StyledApp = styled.div`
  background-color: #F0F0F0;
`;

export default function App() {
  return (
    <StyledApp>
      <PageTitle />
      <Content />
      <Footer />
    </StyledApp>
  );
}

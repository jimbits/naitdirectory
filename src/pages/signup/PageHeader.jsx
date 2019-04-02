import React from "react";
import styled from "styled-components";

const Brand = styled.header`
  text-align: center;
  h1 {
    font-size: calc(1.5rem + 1vmin);
    margin-top: 1rem;
  }
  p {
    font-size: calc(0.8rem + 1vmin);
    margin-bottom: 1rem;
  }
`;

const PageHeader = () => {
  return (
    <Brand>
      <h1>DMIT INDUSTRY DIRECOTRY</h1>
      <p>Sign Up</p>
    </Brand>
  );
};

export default PageHeader;

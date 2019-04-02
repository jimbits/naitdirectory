import React from "react";
import styled from "styled-components";
import PageHeader from "./PageHeader";
import Logo from "components/logo";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: grey;
  box-shadow: 0 0 4px grey;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  margin: 0 0.25rem;
`;
const Page = styled.div`
  padding: 1rem;
  padding-top: calc(3rem + 3vw);
  user-select: none;
  color: #333342;
  font-size: 0.75rem;
  text-align: center;

  svg {
    width: calc(8rem + 2vmin);
    margin-bottom: 2rem;
  }
`;

const LandingPage = props => {
  return (
    <Page>
      <PageHeader />
      <Logo logo="true" />
      <div className="button-container">
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </div>
    </Page>
  );
};

export default LandingPage;

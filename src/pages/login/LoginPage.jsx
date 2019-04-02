import React from "react";
import styled from "styled-components";
import PageHeader from "./PageHeader";
import Logo from "components/logo";
import { Link } from "react-router-dom";
import Button from "components/ui/button";

const Page = styled.div`
  text-align: center;
  svg {
    width: 30%;
    max-width: 150px;
    margin-bottom: 1.5rem;
  }
`;

const LoginPage = props => {
  return (
    <Page>
      <PageHeader />
      <Logo logo={true} />
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </Page>
  );
};
export default LoginPage;

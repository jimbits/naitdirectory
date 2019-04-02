import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "components/navigation";

const Navigaiton = props => {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.LANDINGPAGE}>home</Link>
        </li>
        <li>
          <Link to={ROUTES.SINGUP}>sing up</Link>
        </li>
        <li>
          <Link to={ROUTES.LOGIN}>login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

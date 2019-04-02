import React from "react";
import ReactSVG from "react-svg";
import LogoDark from "./svg/nait-logo-dark.svg";
import LogoLight from "./svg/nait-logo-light.svg";

const Logo = props => {
  return (
    <React.Fragment>
      {props.logo ? <ReactSVG src={LogoLight} /> : <ReactSVG src={LogoDark} />}
    </React.Fragment>
  );
};

export default Logo;

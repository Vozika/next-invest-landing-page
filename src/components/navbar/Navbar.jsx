import React from "react";
import "./navbar.scss";
import { Button } from "../../components";

const Navbar = () => {
  return (
  <div className="navbar">
    <p className="navbar__logo">Next Invest</p>
    <a href="#">Investment Opportunities</a>
    <a href="#">How it works</a>
    <a href="#">About us</a>
    <Button text="Login" class="button"/>
    <Button text="Register" class="button--light"/>
  </div>
  );
};

export default Navbar;

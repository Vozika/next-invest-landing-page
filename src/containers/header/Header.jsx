import React from "react";
import "./header.scss";
import { Navbar, Button } from "../../components";
import Arrows from "./images/arrows.svg";

const Header = () => {
  return (
    <div className="header">
      <Navbar />

      <div className="header__grid-container">
        <div className="header__grid-item--left">
          <div className="header__circle"></div>
          <div className="header__text-container">
            <h1>Meaningful investments in Main Street businesses</h1>
            <p>
              Browse vetted investment offerings in communities all over the US.
            </p>
            <Button text="Get Started" class="button" />
          </div>
        </div>
        <div className="header__grid-item--right">
          <img src={Arrows} className="header__img-arrows" alt="Arrows" />
        </div>
      </div>
    </div>
  );
};

export default Header;

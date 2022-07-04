import React from "react";
import "./footer.scss";
import Back from "./images/back-to-top.svg";
import { Button } from "../../components";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer__grid-container">
      <div className="footer__grid-item"></div>
      <div className="footer__grid-item">
        <p className="footer__logo">Next Invest</p>
        <p>
          Copyright &copy; 2022.
          <br />
          LogoIpsum. All rights reserved.
        </p>
      </div>
      <div className="footer__grid-item">
        <p>
          <strong>Services</strong>
        </p>
        <a href="#">Email Marketing</a>
        <br />
        <br />
        <a href="#">Campaigns</a>
        <br />
        <br />
        <a href="#">Branding</a>
        <br />
        <br />
        <a href="#">Offline</a>
      </div>

      <div className="footer__grid-item">
        <p>
          <strong>About</strong>
        </p>
        <a href="#">Our Story</a>
        <br />
        <br />
        <a href="#">Benefits</a>
        <br />
        <br />
        <a href="#">Team</a>
        <br />
        <br />
        <a href="#">Careers</a>
      </div>

      <div className="footer__grid-item--back">
        <a href="#">
          <img src={Back} alt="Back to top" />
        </a>
      </div>
      <div className="footer__grid-item"></div>

      {/* The Second Row */}
      <div className="footer__grid-item"></div>
      <div className="footer__grid-item">
        <h3>Subscribe to our newsletter</h3>
        <input type="email"></input>
        <Button text="Subscribe" class="button" />
      </div>

      <div className="footer__grid-item"></div>
      <div className="footer__grid-item"></div>
      <div className="footer__grid-item--social">
        <a href="#">
          <IconContext.Provider value={{ size: "2rem" }}>
            <TiSocialFacebookCircular />
          </IconContext.Provider>
        </a>

        <a href="#">
          <IconContext.Provider value={{ size: "2rem" }}>
            <TiSocialInstagram />
          </IconContext.Provider>
        </a>

        <a href="#">
          <IconContext.Provider value={{ size: "2rem" }}>
            <TiSocialTwitter />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

export default Footer;

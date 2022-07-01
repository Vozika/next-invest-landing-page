import React from "react";
import "./cta.scss";
import { Button } from "../../components";
import CTA_Image from "./images/cta.jpg";
import Form_Image from "./images/form.png";

const CTA = () => {
  return (
    <div className="cta__grid-container">
      <div className="cta__grid-item"></div>
      <div className="cta__grid-item">
        <h1>Looking to raise capital for your growing business?</h1>
        <p>
          Whether expanding or opening a brand-new concept, we make it easy to
          raise money from thousands of local investors.
        </p>
        <Button text="Apply Online" class="button" />
      </div>
      
        <img src={CTA_Image} alt="CTA" className="cta__image" />
      
      
        <img src={Form_Image} className="cta__image-form" />
      
    </div>
  );
};

export default CTA;

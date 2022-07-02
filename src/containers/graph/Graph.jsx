import React from "react";
import "./graph.scss";
import Circle from "./images/circle.svg";
import Dots from "./images/dots.svg";
import Chart from "./images/chart.png";
import Arrow from "./images/arrow-icon.svg";

const Graph = () => {
  return (
    <div className="graph__grid-container">
      <div className="graph__grid-item"></div>
      <div className="graph__grid-item">
        <img src={Arrow} alt="Arrow Icon" className="graph__image-arrow-icon" />
        <h1>$7M+ paid out to investors</h1>
        <p>
          Next Invest has already paid out over $7M in cash returns to
          investors. Earn potential cash payments through unique revenue-share
          and debt financing investments.
        </p>
      </div>

      <img src={Chart} alt="Graph" className="graph__image" />

      <div className="graph__grid-item--4">
        <img src={Circle}  alt="Circle" className="graph__image-circle" />
        <img src={Dots}  alt="Dots" className="graph__image-dots" />
      </div>
    </div>
  );
};

export default Graph;

import React from "react";
import "./cardP.css";
const CardP = ({ img, heading, description }) => {
  return (
    <div className="cardd">
      <div className="card-headerr">
        <img src={img} alt={img} />
        {heading}
      </div>
      <div className="cardd-body">
        <p className="card_p">{description}</p>
      </div>
    </div>
  );
};

export default CardP;

import React from "react";
import "./cardP.css";
const CardP = ({ img, heading, description, Classes }) => {
  return (
    <div className={"cardd " + Classes}>
      <div className="card-headerr">
        <img className="cardd_img" src={img} alt={img} />
        {heading}
      </div>
      <div className="cardd-body">
        <p className="card_p">{description}</p>
      </div>
    </div>
  );
};

export default CardP;

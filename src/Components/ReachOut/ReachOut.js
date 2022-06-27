import React from "react";
import mg1 from "../../assets/images/mg1.png";
import mg2 from "../../assets/images/mg2.png";
import mg3 from "../../assets/images/mg3.png";
import gmg1 from "../../assets/images/gmg1.png";
import gmg2 from "../../assets/images/gmg2.png";
import gmg3 from "../../assets/images/gmg3.png";
import "./reachOut.css";

const ReachCard = ({ bg, img, head, para }) => {
  return (
    <div className="card_container">
      <img className="card_img" src={img} alt="" />
      <img className="card_bg_img" src={bg} alt="" />

      <h4 className="card_head">{head}</h4>
      <p className="card_p">{para}</p>
    </div>
  );
};

const ReachOut = () => {
  return (
    <div className="reach_container">
      <div className="reach_text">
        <h1>Seacrh, Shortlist and Reach Out</h1>
      </div>
      <div className="reach_card">
        <ReachCard
          bg={mg1}
          img={gmg1}
          head="Find Unlimited Influencers"
          para="Deep search tech for more than 7 million influencers"
        />
        <ReachCard
          bg={mg2}
          img={gmg2}
          head="Analyze Data Points"
          para={[
            "Engagement and quality analysis to help",
            <br />,
            "you pick real influencers",
          ]}
        />
        <ReachCard
          bg={mg3}
          img={gmg3}
          head="Reach Out"
          para={[
            "Create influencers list, export data and",
            <br />,
            " start a conversation",
          ]}
        />
      </div>
    </div>
  );
};

export default ReachOut;

import React from "react";
import Cir1 from "../../assets/images/Cir1.png";
import Cir2 from "../../assets/images/Cir2.png";
import Cir3 from "../../assets/images/Cir3.png";
import line1 from "../../assets/images/line1.png";
import line2 from "../../assets/images/line2.png";
import line3 from "../../assets/images/line3.png";
import line4 from "../../assets/images/line4.png";
import line5 from "../../assets/images/line5.png";
import line6 from "../../assets/images/line6.png";
import "./roadMap.css";

const RoadCard = ({ head, sub, para, className, class_para }) => {
  return (
    <div className={`${className}`}>
      <p className="road_card_head">{head}</p>
      <p className="road_card_sub">{sub}</p>
      <p className={`${class_para}`}>{para}</p>
    </div>
  );
};

const RoadMap = () => {
  return (
    <div className="road_container">
      <div className="road_head">
        <h1>Roadmap</h1>
      </div>
      <div className="road_sub">
        <p>
          The priority of the features on roadmapcan chage based upon the users'
          feedback.
        </p>
      </div>
      <RoadCard
        className="road_card"
        class_para="road_card_para"
        head="YouTube Influencer Discovery"
        sub="Q4 2019"
        para={[
          "You'll be able to find and connect with",
          <br />,
          "authentic influencer on Youtube",
        ]}
      />
      <RoadCard
        className="road_card road_card_2"
        class_para="road_card_para"
        head="Influencer's Contact Info"
        sub="Q1 2020"
        para={[
          "Get contact info of influencers and reach",
          <br />,
          "out to them",
        ]}
      />
      <RoadCard
        className="road_card road_card_3"
        class_para="road_card_para"
        head="Integration with Other Tools"
        sub="Ongoing"
        para="Email and CRM integrations"
      />
      <div className="road_lines">
        <img className="line1 line" src={line1} alt="" />
        <img className="line2 line" src={line2} alt="" />
        <img className="line3 line" src={line3} alt="" />
      </div>
      <div className="road_dots">
        <img className="road_circle" src={Cir2} alt="" />
        <img className="road_circle" src={Cir1} alt="" />
        <img className="road_circle" src={Cir3} alt="" />
        <img className="road_circle" src={Cir3} alt="" />
        <img className="road_circle" src={Cir3} alt="" />
        <img className="road_circle" src={Cir3} alt="" />
      </div>

      <div className="road_lines">
        <img className="line4 line" src={line4} alt="" />
        <img className="line5 line" src={line5} alt="" />
        <img className="line6 line" src={line6} alt="" />
      </div>
      <RoadCard
        className="road_card_l road_card_4"
        class_para="road_card_paral"
        head="Instagram Influencers"
        sub="Q4 2019 - Done"
        para={[
          "You'll be able to find and connect with",
          <br />,
          "authentic influencers on Instagram",
        ]}
      />
      <RoadCard
        className="road_card_l road_card_5"
        class_para="road_card_paral"
        head="Data Export in CSV"
        sub="Q4 2019"
        para={["Create lists or reports and eport data", <br />, "via CSV"]}
      />
      <RoadCard
        className="road_card_l road_card_6"
        class_para="road_card_paral"
        head="Cost Estimation & CPM"
        sub="Q2 2020"
        para={[
          "Our smart AI will suggest expected CPM",
          <br />,
          "rates for every influencer",
        ]}
      />
    </div>
  );
};

export default RoadMap;

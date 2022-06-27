import React from "react";
import CardP from "./Card/CardP";
import Agency from "../../assets/images/Agency.png";
import B2b from "../../assets/images/B2b.png";
import B2c from "../../assets/images/B2c.png";
import "./solution.css";
// import CardFAQ from "./faqCard/CardFAQ.jsx";
const Solution = () => {
  return (
    <div className="main">
      <div className="solution">
        <h1>Solution for every kind of business</h1>
        <div className="cards-container">
          <CardP
            img={Agency}
            heading={<div>Agency</div>}
            description={[
              "Whether you are a small agency or a",
              <br />,
              "big one, our inflence database will",
              <br />,
              "help you get better results for your",
              <br />,
              "clients.",
            ]}
          />
          <CardP
            img={B2c}
            heading={
              <div>
                B<span>2</span>C
              </div>
            }
            description={[
              "Having influencers from almost every",
              <br />,
              "niche and industry makes it possible",
              <br />,
              "to help you create powerful B2C",
              <br />,
              "marketing campaigns.",
            ]}
          />
          <CardP
            img={B2b}
            heading={
              <div>
                B<span>2</span>B
              </div>
            }
            description={[
              "Our search engine makes influencer",
              <br />,
              "prospecting and marketing easy for",
              <br />,
              "the B2B industry as well.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;

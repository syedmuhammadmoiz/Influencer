import React from "react";
import Cost from "../../assets/images/Cost.png";
import Demo from "../../assets/images/Demo.png";
import Location from "../../assets/images/Location.png";
import Niche from "../../assets/images/Niche.png";
import Contact from "../../assets/images/Contact.png";
import Engage from "../../assets/images/Engage.png";
import "./getData.css";
const GetCard = ({ img, head, para }) => {
  return (
    <div className="get_card_container">
      <img className="get_img" src={img} alt="" />
      <p className="get_card_head">{head}</p>
      <p className="get_card_para">{para}</p>
      <p className="get_card_link">
        Learn More <div className="tri"></div>{" "}
      </p>
    </div>
  );
};

const GetData = () => {
  const getData = [
    {
      img: Demo,
      head: "Demographics",
      para: [
        "Access age and gender statistics for each",
        <br />,
        "influencer's audience. We sample",
        <br />,
        "demographic data from every influencer's",
        <br />,
        "following to ensure your campaign",
        <br />,
        "reaches your target market.",
      ],
    },
    {
      img: Engage,
      head: "Engagement Stats",
      para: [
        "We calculate the ammount of engagement",
        <br />,
        "each profile gets, to maximize your money.",
        <br />,
        "Metrics like this ensure you don't fall victim",
        <br />,
        "to influencers with fake followers.",
      ],
    },
    {
      img: Niche,
      head: "Niche",
      para: [
        "Our Advance AI syatem analyzes",
        <br />,
        "every profile so that you can search our",
        <br />,
        "influencer database for almost any",
        <br />,
        "niche imaginable.",
      ],
    },
    {
      img: Location,
      head: "Location",
      para: [
        "We also allow you to search by location.",
        <br />,
        "You can find local influencers so that you",
        <br />,
        "can target audience on the hyper-local",
        <br />,
        "level.",
      ],
    },
    {
      img: Contact,
      head: ["Contact Info ", <span>(Roadmap) </span>],
      para: [
        "We will also provide you with the contact info of",
        <br />,
        "tens of thousands of influencers. Since you",
        <br />,
        "are contacting them directly ,that means",
        <br />,
        "you get the best price. Most middleman",
        <br />,
        "services charge massive markup.",
      ],
    },
    {
      img: Cost,
      head: ["Cost Estimation ", <span>(Roadmap) </span>],
      para: [
        "If you want to compare the",
        <br />,
        "effectivness of different influencers",
        <br />,
        "inside the platform. You'll be able to use",
        <br />,
        "our CMP tool to estimate cost.",
      ],
    },
  ];

  return (
    <div className="get_container">
      <div className="get_head">
        <h1>Data You'll Get With Us</h1>
      </div>
      <div className="get_cards">
        {getData.map((d) => (
          <GetCard img={d.img} head={d.head} para={d.para} />
        ))}
      </div>
    </div>
  );
};

export default GetData;

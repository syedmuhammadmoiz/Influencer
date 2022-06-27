import React from "react";
import Header from "../../Components/Header/Header";
import SearchEngine from "../../Components/SearchEngine/SearchEngine";
import ReachOut from "../../Components/ReachOut/ReachOut";
import GetData from "../../Components/GetData/GetData";
import RoadMap from "../../Components/RoadMap/RoadMap";
import Solution from "../../Components/Solution/Solution";
import Pricing from "../../Components/Pricing/Pricing";
import CardFAQ from "../../Components/FaqCard/CardFAQ";
import Footer from "../../Components/Footer/Footer";
import "./influencer.css";

const Influencer = () => {
  return (
    <>
      <div className="header_inf">
        <Header />
      </div>
      <SearchEngine />
      <ReachOut />
      <GetData />
      <Solution />
      <RoadMap />
      <Pricing />
      <CardFAQ />
      <Footer />
    </>
  );
};

export default Influencer;
